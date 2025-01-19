import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Order } from '../../interfaces/order.interface';

export const selectOrderState = createFeatureSelector<Order>('order');

export const selectOrder = createSelector(
    selectOrderState,
    (state) => state
);
