import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import ApiService from '../../shared/service/api.service';
import { TokenPayload } from '../../shared/interfaces/user.interface';
import { loginUser, logoutUser } from '../store/user.actions';

@Injectable({
  providedIn: 'root',
})
export default class AuthService{
  constructor(private store: Store, private api: ApiService) {} 
    
  login(username: string, password: string){
    this.api.authenticate(username, password).subscribe(jwtResponse => {
      sessionStorage.setItem('jwtToken', jwtResponse.jwtToken);
      this.api.loadUser(username).subscribe(userResponse => {
        sessionStorage.setItem('currentUser', JSON.stringify(userResponse));
        this.store.dispatch(loginUser({jwtToken: jwtResponse.jwtToken, user: userResponse}))
      })
    });
  }

  logout(){
    this.store.dispatch(logoutUser());
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