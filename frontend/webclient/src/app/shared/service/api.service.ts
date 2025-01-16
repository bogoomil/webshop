import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Authentication, User, UserForm } from '../interfaces/auth.interface';
import { Item, Kategoria } from '../interfaces/menu.interface';
import { Shop } from '../interfaces/shop.interface';

@Injectable({
  providedIn: 'root',
})
export default class ApiService {
  constructor(private http: HttpClient) {} 
  
  
  userList(){
    this.http.get('/api/private/userlist', {responseType: 'json'} )
    .subscribe(response => {
        console.log(response);
    })
  }

  authenticate(username: string, password: string): Observable<Authentication>{
    return this.http.post<Authentication>('/api/public/authenticate', {'username': username, 'password': password});
  }

  signup(user: User){
    return this.http.post<Authentication>('/api/public/signup', user);
  }

  updateUser(user: User){
    return this.http.post<UserForm>('/api/private/update', user);
  }

  loadUser(email: string): Observable<User> {
    return this.http.get<User>('/api/private/user/' + email);
  }

  kategoriaList(): Observable<Kategoria[]>{
    return this.http.get<Kategoria[]>('/api/public/categories/all', {responseType: 'json'} );
  }

  itemList(kategoriaName: string): Observable<Item[]>{
    return this.http.get<Item[]>('/api/public/items/' + kategoriaName, {responseType: 'json'} );
  }

  loadShop(): Observable<Shop>{
    return this.http.get<Shop>('/api/public/shop', {responseType: 'json'});
  }

}