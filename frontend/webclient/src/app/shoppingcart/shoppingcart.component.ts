import { GroupedCartResult } from './../shared/menu.interface';

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Cart, CartItem } from '../shared/menu.interface';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge'
import { CommonModule } from '@angular/common';
import { selectItems } from '../menu/store/product.selectors';
import * as CartActions from '../menu/store/product.actions';
import { MatButtonModule } from '@angular/material/button';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrl: './shoppingcart.component.scss',
  imports: [MatIconModule, MatBadgeModule, MatButtonModule, CommonModule],
  standalone: true
})
export class ShoppingcartComponent {

  order$: Observable<GroupedCartResult>;


  constructor(private store: Store<Cart>) {
    this.order$ = this.groupCartItems(this.store.select(selectItems));
    this.order$.subscribe(result => {
      console.log("faszomöccse: " + JSON.stringify(result));
    });
  }

  groupCartItems(cartItems$: Observable<CartItem[]>): Observable<GroupedCartResult> {
    return cartItems$.pipe(
      map(cartItems => {
        return cartItems.reduce<GroupedCartResult>((acc, item) => {
          const existingGroup = acc.items.find(group => group.name === item.name);
          if (existingGroup) {
            existingGroup.count += 1;
          } else {
            acc.items.push({ ...item, count: 1 });
          }
          return acc;
        }, { items: [] });
      })
    );
  }


  addToCart(item: CartItem | undefined) {
    console.log('add to cart');
    if (item) {
      this.store.dispatch(CartActions.postCart({ cartItem: { name: item.name, packagingFee: item.packagingFee, price: item.price } }))
    }
  }

  removeFromCart(item: CartItem) {
    console.log('remove from cart');
    this.store.dispatch(CartActions.removeItemFromCart({ cartItem: { name: item.name, packagingFee: item.packagingFee, price: item.price } }))
  }

}
