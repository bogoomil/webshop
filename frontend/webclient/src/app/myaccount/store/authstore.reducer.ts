import { createReducer, on } from '@ngrx/store';
import { login, logout } from './authstore.actions';

export const initialState = false;

export const authstoreReducer = createReducer(
  initialState,
  on(login, () => true),
  on(logout, () => false),
);