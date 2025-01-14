import { Component, Input, OnInit } from '@angular/core';
import { AppStateInterface, Item } from '../../shared/menu.interface';
import { Store, select } from '@ngrx/store';
// import { MessageService } from 'primeng/api';
import * as CartActions from '../store/product.actions';
import { Observable } from 'rxjs';
import { cartSelector } from '../store/product.selectors';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart-options',
  templateUrl: './cart-options.component.html',
  styleUrls: ['./cart-options.component.scss'],
  imports: [CommonModule],
  standalone: true
  // providers: [MessageService]
})
export class ButtonAddComponent implements OnInit{
  @Input() product?: Item;
  cart$: Observable<Item[]>;
  path: String = '';

  constructor(
    private store: Store<AppStateInterface>,
    // private messageService: MessageService,
    private route: ActivatedRoute) 
  { 
    this.cart$ = this.store.pipe(select(cartSelector));
  }

  ngOnInit() {
    this.route.url.subscribe(([url]) => {
      this.path = url.path;
    });
  }

  addToCart(product: any) {
    console.log('add to cart');
    this.store.dispatch(CartActions.postCart({products: product}))
    // this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Item added to cart' });
  }

  removeFromCart(product: any) {
    console.log('remove from cart');
    this.store.dispatch(CartActions.removeItemFromCart({product: product}))
    // this.messageService.add({ severity: 'warn', summary: 'Removed', detail: 'Item removed from cart' });
  }
}
