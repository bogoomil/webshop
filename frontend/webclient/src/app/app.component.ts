import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { login } from './user/store/authstore.actions';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import BaseComponent from './shared/base.component';
import AuthService from './user/services/auth.service';
import { CommonModule } from '@angular/common';
import { CartComponent } from "./menu/cart/cart.component";
import ShopService from './shared/service/shop.service';
import { Shop } from './shared/interfaces/shop.interface';
import { selectShop } from './shared/store/shop.selectors';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    MatTabsModule, MatIconModule, RouterLink, RouterLinkActive, CommonModule, CartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent extends BaseComponent implements OnInit{
  title = 'Hathi';
  activeLink = '';

   constructor(
     store: Store<{ loggedIn: boolean, shop: Shop }>,
     authservice: AuthService,
     private shopService: ShopService,
     
   ) {
     super(store, authservice)
   }
 
  ngOnInit(): void {
    console.log('INIT APP COMPONENT');
    let jwtToken = sessionStorage.getItem('jwtToken');
    if (jwtToken) {
      this.store.dispatch(login());
    }
    this.store.select(selectShop).subscribe(shop => {
      if(shop.serviceAreas.length == 0){
        this.shopService.loadShop();
      }
    });
  }
}
