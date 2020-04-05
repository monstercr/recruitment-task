import { IUser } from '../../types/user';
import {
  ActionTypes,
  IUsersRequest,
  IUsersRequestError,
  IUsersRequestSuccess
} from './types/actions';

export function userRequest(): IUsersRequest {
  return {
    type: ActionTypes.USERS_REQUEST
  };
}

export function userRequestSuccess(payload: IUser[]): IUsersRequestSuccess {
  return {
    type: ActionTypes.USERS_REQUEST_SUCCESS,
    payload
  };
}

export function userRequestError(): IUsersRequestError {
  return {
    type: ActionTypes.USERS_REQUEST_ERROR
  };
}
