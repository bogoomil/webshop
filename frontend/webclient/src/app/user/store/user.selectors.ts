import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LoggedInUserData, User } from '../../shared/interfaces/user.interface';

export const selectStoreState = createFeatureSelector<LoggedInUserData>('user');

export const selectUser = createSelector(
    selectStoreState,
    (state) => state.user
);

export const selectJwtToken = createSelector(
    selectStoreState,
    (state) => state.jwtToken
);

export const selectLoggedIn = createSelector(
    selectStoreState,
    (state) => state.jwtToken != null
)


export const hasSuchRole = (role: string) => createSelector(selectStoreState, (items) => (items.user && items.user.roles) ? items.user.roles.includes(role) : false);