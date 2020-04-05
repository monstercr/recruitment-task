import { IUser } from '../../../types/user';

export interface IUsersState {
  users: IUser[];
  requesting: boolean;
  success: boolean;
  error: boolean;
}
