import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Shop } from '../../shared/interfaces/shop.interface';

export const selectShopState = createFeatureSelector<Shop>('shop');

export const selectShop = createSelector(
    selectShopState,
    (state) => state
);

export const selectServiceAreas = createSelector(
    selectShopState,
    (state) => state.serviceAreas
);
