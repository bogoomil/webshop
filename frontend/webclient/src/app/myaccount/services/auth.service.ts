import { Injectable, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { login, logout } from '../store/authstore.actions';
import ApiService from './api.service';
import { TokenPayload } from '../models/auth.interface';

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

  hasRole(roleName: string): boolean {
    let retVal = false;
    let token = sessionStorage.getItem('jwtToken');
    if(token){
      let parts = token.split('.');
      let payload = atob(parts[1]);
      let tokenPayload: TokenPayload = JSON.parse(payload);
      tokenPayload.roles.forEach(element => {
        if(element.authority === roleName){
          retVal = true;
        }
      });
    }
    return retVal;
  }
}