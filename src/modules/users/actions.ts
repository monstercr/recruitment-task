import { IUser } from '../../types/user';
import {
  ActionTypes,
  IUsersRequest,
  IUsersRequestError,
  IUsersRequestPayload,
  IUsersRequestSuccess
} from './types/actions';

export function userRequest(payload: IUsersRequestPayload): IUsersRequest {
  return {
    type: ActionTypes.USERS_REQUEST,
    payload
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
