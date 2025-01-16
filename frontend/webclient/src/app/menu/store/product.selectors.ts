import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Cart } from '../../shared/interfaces/menu.interface';

export const selectStoreState = createFeatureSelector<Cart>('cart');

export const selectItems = createSelector(
    selectStoreState,
    (state) => state.products
);

export const selectErrors = createSelector(
    selectStoreState,
    (state) => state.error
);