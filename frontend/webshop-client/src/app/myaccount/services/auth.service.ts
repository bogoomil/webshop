import { Injectable, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { login, logout } from '../store/authstore.actions';
import ApiService from './api.service';

@Injectable({
  providedIn: 'root',
})
export default class AuthService{
  constructor(private store: Store, private api: ApiService) {} 
  
  
  login(username: string, password: string){
    this.api.authenticate(username, password).subscribe(response => {
      sessionStorage.setItem('jwtToken', response.jwttoken);
      this.store.dispatch(login());
    });
  }

  logout(){
    this.store.dispatch(logout());
    sessionStorage.removeItem('jwtToken');
  }
  
}