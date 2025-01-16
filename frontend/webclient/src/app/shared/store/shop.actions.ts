// product.action.ts
import { createAction, props } from "@ngrx/store";
import { Shop } from "../interfaces/shop.interface";

export const getShop = createAction(
    '[Shop] Get shop',
);

export const postShop = createAction(
    '[Cart] Post Shop',
    props<{ shop: Shop }>()
);
