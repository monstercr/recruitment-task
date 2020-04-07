import { combineReducers } from 'redux';

import usersReducer from '../modules/users/reducers';
import configureStore from './createStore';
import rootSaga from './rootSaga';
import { IStoreState } from './types';

const rootReducer = combineReducers<IStoreState>({
  users: usersReducer
});

export default configureStore(rootReducer, rootSaga);
