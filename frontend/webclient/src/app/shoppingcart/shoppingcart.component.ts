import { GroupedCartResult } from './../shared/interfaces/menu.interface';

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, combineLatest, forkJoin } from 'rxjs';
import { Cart, CartItem } from '../shared/interfaces/menu.interface';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge'
import { CommonModule } from '@angular/common';
import { selectItems } from '../menu/store/product.selectors';
import * as CartActions from '../menu/store/product.actions';
import { MatButtonModule } from '@angular/material/button';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { ServiceArea, Shop } from '../shared/interfaces/shop.interface';
import { selectServiceAreas } from '../shared/store/shop.selectors';
import UserService from '../user/services/user.service';
import { User } from '../shared/interfaces/user.interface';
import {selectLoggedInUsersZip} from '../user/store/user.selectors';
@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrl: './shoppingcart.component.scss',
  imports: [MatIconModule, MatBadgeModule, MatButtonModule, CommonModule],
  standalone: true
})
export class ShoppingcartComponent {

  order$: Observable<GroupedCartResult>;
  sum$: Observable<number> = of(0);
  serviceAreas$: Observable<ServiceArea[]>;
  transitCost$: Observable<number | undefined>;



  constructor(private store: Store, userService: UserService) {
    this.order$ = this.groupCartItems(this.store.select(selectItems));
    this.serviceAreas$ = this.store.select(selectServiceAreas);
    this.order$.subscribe(result => {
      this.sum$ = of(this.getSum(result));
    });
    this.transitCost$ = this.getTransitCostByZip(this.serviceAreas$, this.store.select(selectLoggedInUsersZip));
  }

  getTransitCostByZip(
    serviceAreas$: Observable<ServiceArea[]>,
    zip$: Observable<string | undefined>
  ): Observable<number | undefined> {
    return combineLatest([serviceAreas$, zip$]).pipe(
      map(([serviceAreas, zip]) => {
        if (zip === undefined) {
          return undefined; // Handle undefined ID explicitly
        }
        const item = serviceAreas.find((item) => item.zip === zip);
        return item ? item.transitCost : undefined; // Returns undefined if no match is found
      })
    );
  }

  getSum(groupedResult: GroupedCartResult): number {
    let sum = 0;
    groupedResult.items.forEach(item => {
      sum += item.count * (item.price + item.packagingFee);
    })
    return sum;
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
