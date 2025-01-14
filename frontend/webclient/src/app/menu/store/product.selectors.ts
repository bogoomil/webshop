import { createSelector } from '@ngrx/store';
import { AppStateInterface } from '../../shared/menu.interface';

export const selectFeature = (state: AppStateInterface) => state.products;

export const cartSelector = createSelector(
  selectFeature,
  (state) => state.products
);

export const errorSelector = createSelector(
  selectFeature,
  (state) => state.error
);
