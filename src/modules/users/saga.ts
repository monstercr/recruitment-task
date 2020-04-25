import { call, put, takeEvery } from 'redux-saga/effects';

import { ApiConfig, Config } from '../../config';
import Api from '../../utils/api';
import * as actions from './actions';
import { ActionTypes, IUsersRequest, IUsersRequestPayload } from './types/actions';

const fetchUsersApi = async (payload: IUsersRequestPayload): Promise<any> => {
  const { key } = payload;

  const { data } = await Api.get(ApiConfig.endpoints.searchUsers(`${key}`, Config.MAX_RESULTS));
  return data;
};

export function* fetchUsersSaga(action: IUsersRequest) {
  const { payload } = action;

  try {
    const { ...usersData } = yield call(fetchUsersApi, payload);

    yield put(actions.userRequestSuccess(usersData.items));
  } catch (error) {
    yield put(actions.userRequestError());
  }
}

export default function* () {
  yield takeEvery(ActionTypes.USERS_REQUEST, fetchUsersSaga);
}
