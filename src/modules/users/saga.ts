import { call, put, takeEvery } from 'redux-saga/effects';

import { ApiConfig, Config } from '../../config';
import * as actions from './actions';
import { ActionTypes } from './types/actions';

function fetchUsersApi() {
  return fetch(`${ApiConfig.URL}${ApiConfig.endpoints.searchUsers('test', Config.MAX_RESULTS)}`)
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
}

export function* fetchUsersSaga() {
  const { response } = yield call(fetchUsersApi);
  console.log(response);
  if (response) yield put(actions.userRequestSuccess(response.items));
  else yield put(actions.userRequestError());
}

export default function* () {
  yield takeEvery(ActionTypes.USERS_REQUEST, fetchUsersSaga);
}
