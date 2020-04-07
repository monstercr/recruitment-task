import { createSelector } from 'reselect';

import { IStoreState } from '../../store/types';

const usersSelector = (state: IStoreState) => state.users;

export const userRequestingSelector = createSelector(usersSelector, (users) => users.requesting);
export const userErrorSelector = createSelector(usersSelector, (users) => users.error);
export const userSuccessSelector = createSelector(usersSelector, (users) => users.success);
export const userDataSelector = createSelector(usersSelector, (users) => users.users);
