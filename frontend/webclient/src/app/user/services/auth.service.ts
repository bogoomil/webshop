import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import ApiService from '../../shared/service/api.service';
import { TokenPayload } from '../../shared/interfaces/user.interface';
import { loginUser, logoutUser, setJwtToken } from '../store/user.actions';

@Injectable({
  providedIn: 'root',
})
export default class AuthService{
  constructor(private store: Store, private api: ApiService) {}

  login(username: string, password: string){
    this.api.authenticate(username, password).subscribe(jwtResponse => {
      this.store.dispatch(setJwtToken({jwtToken: jwtResponse.jwtToken}));
      this.api.loadUser(username).subscribe(userResponse => {
        this.store.dispatch(loginUser({user: userResponse}))
      })
    });
  }

  logout(){
    this.store.dispatch(logoutUser());
  }

}
