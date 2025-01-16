import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Cart, CartItem } from '../../shared/interfaces/menu.interface';
import { MatIconModule } from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge'
import { CommonModule } from '@angular/common';
import { selectItems } from '../store/product.selectors';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  imports: [MatIconModule, MatBadgeModule, CommonModule],
  standalone: true
})
export class CartComponent implements OnInit{
    cart$: Observable<CartItem[]>;

  szam: number = 0;

  constructor(private store: Store<Cart>) { 
    this.cart$ = this.store.select(selectItems);
  }
  ngOnInit(): void {
    
  }

}
