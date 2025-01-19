import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LoggedInUserData, User } from '../../shared/interfaces/user.interface';

export const selectUserState = createFeatureSelector<LoggedInUserData>('user');

export const selectUser = createSelector(
    selectUserState,
    (state) => state.user
);

export const selectLoggedInUsersZip = createSelector(
    selectUserState,
    (state) => state.user?.shippingAddress.zip 
);

export const selectJwtToken = createSelector(
    selectUserState,
    (state) => state.jwtToken
);

export const selectLoggedIn = createSelector(
    selectUserState,
    (state) => state.jwtToken != null
);


export const hasSuchRole = (role: string) => createSelector(selectUserState, (items) => (items.user && items.user.roles) ? items.user.roles.includes(role) : false);