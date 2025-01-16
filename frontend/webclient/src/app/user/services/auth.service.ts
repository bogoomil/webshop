import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { login, logout } from '../store/authstore.actions';
import ApiService from '../../shared/service/api.service';
import { TokenPayload } from '../../shared/interfaces/auth.interface';

@Injectable({
  providedIn: 'root',
})
export default class AuthService{
  constructor(private store: Store, private api: ApiService) {} 
    
  login(username: string, password: string){
    debugger
    this.api.authenticate(username, password).subscribe(response => {
      sessionStorage.setItem('jwtToken', response.jwtToken);
      this.api.loadUser(username).subscribe(response => {
        sessionStorage.setItem('currentUser', JSON.stringify(response));
        this.store.dispatch(login());
      })
    });
  }

  logout(){
    this.store.dispatch(logout());
    sessionStorage.removeItem('jwtToken');
    sessionStorage.removeItem('currentUser');
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