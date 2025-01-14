import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Item, Kategoria } from '../model/menu.interface';

@Injectable({
  providedIn: 'root',
})
export default class ApiService {
  constructor(private http: HttpClient) {} 
  
  
  kategoriaList(): Observable<Kategoria[]>{
    return this.http.get<Kategoria[]>('/api/public/categories/all', {responseType: 'json'} );
  }

  itemList(kategoriaName: string): Observable<Item[]>{
    return this.http.get<Item[]>('/api/public/items/' + kategoriaName, {responseType: 'json'} );
  }

}