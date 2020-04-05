export interface IUser {
  login: string;
  id: number;
  repositories?: IUserRepositories[];
}

export interface IUserRepositories {
  name: string;
  id: number;
  description: string;
}
