// product.action.ts
import { createAction, props } from "@ngrx/store";
import { CartItem } from "../../shared/menu.interface";

export const getCart = createAction(
    '[Cart] Get Cart Items',
);

export const postCart = createAction(
    '[Cart] Post Cart',
    props<{ cartItem: CartItem }>()
);

export const removeItemFromCart = createAction(
    '[Cart] Remove Item from Cart',
    props<{ cartItem: CartItem }>()
);

export const getCartFailure = createAction(
    '[Cart] Get Cart failure',
    props<{ error: string }>()
);