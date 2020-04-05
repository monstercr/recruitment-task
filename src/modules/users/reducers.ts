import { combineReducers } from 'redux';

import { IUser } from '../../types/user';
import { Actions, ActionTypes } from './types/actions';
import { IUsersState } from './types/state';

const initialState: IUsersState = {
  users: [],
  requesting: false,
  error: false,
  success: false
};

function users(state = initialState.users, action: Actions): IUser[] {
  switch (action.type) {
    case ActionTypes.USERS_REQUEST_SUCCESS: {
      return action.payload;
    }
    case ActionTypes.USERS_REQUEST_ERROR: {
      return [];
    }
    default: {
      return state;
    }
  }
}

function requesting(state = initialState.requesting, action: Actions): boolean {
  switch (action.type) {
    case ActionTypes.USERS_REQUEST: {
      return true;
    }
    case ActionTypes.USERS_REQUEST_SUCCESS:
    case ActionTypes.USERS_REQUEST_ERROR: {
      return false;
    }
    default: {
      return state;
    }
  }
}

function error(state = initialState.error, action: Actions): boolean {
  switch (action.type) {
    case ActionTypes.USERS_REQUEST_ERROR: {
      return true;
    }
    case ActionTypes.USERS_REQUEST_SUCCESS: {
      return false;
    }
    default: {
      return state;
    }
  }
}

function success(state = initialState.success, action: Actions): boolean {
  switch (action.type) {
    case ActionTypes.USERS_REQUEST_ERROR: {
      return false;
    }
    case ActionTypes.USERS_REQUEST_SUCCESS: {
      return true;
    }
    default: {
      return state;
    }
  }
}

export default combineReducers<IUsersState, Actions>({
  error,
  requesting,
  success,
  users
});
