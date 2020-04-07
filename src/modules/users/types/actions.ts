import { IUser } from '../../../types/user';

export enum ActionTypes {
  USERS_REQUEST = '[USERS] request',
  USERS_REQUEST_SUCCESS = '[USERS] request - success',
  USERS_REQUEST_ERROR = '[USERS} request - error'
}

export type Actions = IUsersRequest | IUsersRequestSuccess | IUsersRequestError;

export interface IUsersRequest {
  readonly type: ActionTypes.USERS_REQUEST;
  payload: IUsersRequestPayload;
}

export interface IUsersRequestPayload {
  key: string;
}

export interface IUsersRequestSuccess {
  readonly type: ActionTypes.USERS_REQUEST_SUCCESS;
  payload: IUser[];
}

export interface IUsersRequestError {
  readonly type: ActionTypes.USERS_REQUEST_ERROR;
}
