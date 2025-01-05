import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { login, logout } from '../store/authstore.actions';

@Injectable({
  providedIn: 'root',
})
export default class AuthService {
  constructor(private store: Store) {} 
  
  login(jwtToken: string){
    this.store.dispatch(login());
    sessionStorage.setItem('jwtToken', jwtToken);
  }

  logout(){
    this.store.dispatch(logout());
    sessionStorage.removeItem('jwtToken');
  }
  
}