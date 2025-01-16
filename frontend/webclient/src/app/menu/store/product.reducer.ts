// product.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { Cart, CartItem } from '../../shared/interfaces/menu.interface';
import * as PostsActions from './product.actions';

export const initialState: Cart = {
  products: [],
  error: '',
};

export const cartReducer = createReducer(
  initialState,

  on(PostsActions.getCart, (state) => ({
    ...state,
  })),

  on(PostsActions.postCart, (state, action) => {
    state = {
      ...state,
      products: [...state.products, action.cartItem]
    }
    console.log('POST CART');
    return state;
  }),

  on(PostsActions.removeItemFromCart, (state, action) => {
    const products = [...state.products];
    const index = products.findIndex(x => x.name === action.cartItem.name);
    products.splice(index, 1);
    console.log('POST REMOVE FROM CART');

    state = {
      ...state,
      products: products
    }

    return state;
  }),

  on(PostsActions.getCartFailure, (state, action) => ({
    ...state,
    error: action.error,
  }))
);