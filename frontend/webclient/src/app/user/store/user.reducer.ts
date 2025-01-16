import { createReducer, on } from '@ngrx/store';
import { LoggedInUserData, User } from '../../shared/interfaces/user.interface';
import * as UserActions from './user.actions';

export const initialState: LoggedInUserData = {
    jwtToken: null,
    user: null,
}

export const userReducer = createReducer(
    initialState,

    on(UserActions.getUser, (state) => ({
        ...state,
    })),

    on(UserActions.loginUser, (state, action) => {
        state = {
            ...state,
            jwtToken: action.jwtToken,
            user: action.user
        }
        return state;
    }),

    on(UserActions.logoutUser, (state) => {
        state = {
            ...state,
            jwtToken: null,
            user: null
        }
        return state;
    }),

    on(UserActions.updateUser, (state, action) => {
        state = {
            ...state,
            user: action.user,
        }
        return state;
    })
);