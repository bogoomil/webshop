import { createAction, props } from "@ngrx/store";
import { User } from "../../shared/interfaces/user.interface";

export const getUser = createAction(
    '[User] get user',
)

export const setJwtToken = createAction(
    '[User] set jwt token', 
    props<{jwtToken: string}>()
)

export const loginUser = createAction(
    '[User] Login User', 
    props<{user: User}>()
)

export const logoutUser = createAction(
    '[User] Logout User'
)

export const updateUser = createAction(
    '[User] Update User',
    props<{user: User}>()
)