import { Injectable } from '@angular/core';
import ApiService from './api.service';
import { Store } from '@ngrx/store';
import { Shop } from '../interfaces/shop.interface';
import * as ShopActions from '../store/shop.actions';


@Injectable({
  providedIn: 'root',
})
export default class ShopService {
  constructor(private api: ApiService, private store: Store<Shop>) { }

  loadShop() {
    this.api.loadShop().subscribe(shop => {
      this.store.dispatch(ShopActions.postShop({ shop: shop }))
    })
  }
}
