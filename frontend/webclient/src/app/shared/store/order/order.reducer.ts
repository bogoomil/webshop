import { createReducer, on } from '@ngrx/store';
import * as OrderActions from './order.actions';
import { Order } from '../../interfaces/order.interface';

export const initialState: Order = {

};

export const orderReducer = createReducer(
  initialState,

  on(OrderActions.getOrder, (state) => ({
    ...state,
  })),

  on(OrderActions.postOrder, (state, action) => {
    state = action.order;
    console.log('POST SHOP');
    return state;
  }),
);