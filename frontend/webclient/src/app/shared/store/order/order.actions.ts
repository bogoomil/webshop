import { Order } from './../../interfaces/order.interface';
// product.action.ts
import { createAction, props } from "@ngrx/store";

export const getOrder = createAction(
    '[Order] Get Order',
);

export const postOrder = createAction(
    '[Order] Post Order',
    props<{ order: Order }>()
);
