import { createReducer, on } from '@ngrx/store';
import * as PostsActions from './shop.actions';
import { Shop } from '../interfaces/shop.interface';

export const initialState: Shop = {
    serviceAreas: []
 };

export const shopReducer = createReducer(
  initialState,

  on(PostsActions.getShop, (state) => ({
    ...state,
  })),

  on(PostsActions.postShop, (state, action) => {
    state = action.shop;
    console.log('POST SHOP');
    return state;
  }),
);