import { all } from 'redux-saga/effects';

import UsersSaga from '../modules/users/saga';

export default function* rootSaga() {
  yield all([UsersSaga()]);
}
