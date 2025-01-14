import { Component, Input, OnInit } from '@angular/core';
import { Cart, Item } from '../../shared/menu.interface';
import { Store, select } from '@ngrx/store';
import * as CartActions from '../store/product.actions';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge'

@Component({
  selector: 'app-cart-options',
  templateUrl: './cart-options.component.html',
  styleUrls: ['./cart-options.component.scss'],
  imports: [CommonModule, MatButtonModule, MatIconModule, MatBadgeModule],
  standalone: true
  // providers: [MessageService]
})
export class ButtonAddComponent implements OnInit{
  @Input() item: Item | undefined;
  path: String = '';

  constructor(
    private store: Store<Cart>,
    private route: ActivatedRoute) 
  { 
  }

  ngOnInit() {
    this.route.url.subscribe(([url]) => {
      this.path = url.path;
    });
  }

  addToCart(item: Item | undefined) {
    console.log('add to cart');
    if(item){
      this.store.dispatch(CartActions.postCart({cartItem: {name: item.name, packagingFee: item.packagingFee, price: item.price}}))
    }
  }

  removeFromCart(item: Item) {
    console.log('remove from cart');
    this.store.dispatch(CartActions.removeItemFromCart({cartItem: {name: item.name, packagingFee: item.packagingFee, price: item.price}}))
  }
}
