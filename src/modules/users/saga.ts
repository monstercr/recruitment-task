import { all, call, put, takeEvery } from 'redux-saga/effects';

import { ApiConfig, Config } from '../../config';
import { IUser } from '../../types/user';
import Api from '../../utils/api';
import * as actions from './actions';
import { ActionTypes, IUsersRequest, IUsersRequestPayload } from './types/actions';

const fetchRepos = async (payload: string): Promise<any> => {
  const { data } = await Api.get(payload);
  return data;
};

const fetchUsersApi = async (payload: IUsersRequestPayload): Promise<any> => {
  const { key } = payload;

  const { data } = await Api.get(ApiConfig.endpoints.searchUsers(`${key}`, Config.MAX_RESULTS));
  return data;
};

export function* fetchUsersSaga(action: IUsersRequest) {
  const { payload } = action;

  try {
    const { ...usersData } = yield call(fetchUsersApi, payload);
    const { ...reposData } = yield all(
      usersData.items.map((item: any, key: number) => call(fetchRepos, item.repos_url))
    );

    usersData.items.forEach((user: IUser, key: number) => {
      user.repositories = reposData[key];
    });

    yield put(actions.userRequestSuccess(usersData.items));
  } catch (error) {
    yield put(actions.userRequestError());
  }
}

export default function* () {
  yield takeEvery(ActionTypes.USERS_REQUEST, fetchUsersSaga);
}
