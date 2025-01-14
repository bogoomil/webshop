import { Observable } from 'rxjs';
import { Injectable, OnInit } from '@angular/core';
import { Item, Kategoria } from '../model/menu.interface';
import ApiService from './api.service';

@Injectable({
  providedIn: 'root',
})
export default class MenuService{
  constructor(private api: ApiService) {} 
  

  loadAllCategories(): Observable<Kategoria[]> {
    return this.api.kategoriaList();
  }

  loadItems(kategoriaName: string): Observable<Item[]> {
    return this.api.itemList(kategoriaName);
  }


}