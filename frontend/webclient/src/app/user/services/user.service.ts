import { User, UserForm } from '../../shared/interfaces/user.interface';
import { Injectable, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import ApiService from '../../shared/service/api.service';
import AuthService from './auth.service';
import { Observable, of } from 'rxjs';
import { updateUser } from '../store/user.actions';

@Injectable({
  providedIn: 'root',
})
export default class UserService{
  constructor(private store: Store, private api: ApiService, private auth: AuthService) {} 
  
  signup(user: User){
    this.api.signup(user).subscribe(response => {
      this.auth.login(user.email, user.password);
    });
  }

  updateUser(user: User){
    this.api.updateUser(user).subscribe(response => {
      sessionStorage.setItem('currentUser', JSON.stringify(response));
      this.store.dispatch(updateUser({user: JSON.parse(JSON.stringify(response))}));
      alert('Mentés sikeres.')
    });
  }

  currentUser(): Observable<User>{
    return of(this.loadCurrentUser());
  }

  loadCurrentUser() : User{
    let storedUser = sessionStorage.getItem('currentUser');
    if(storedUser){
      return JSON.parse(storedUser)
    }
    return {
        email: '',
        username: '',
        firstName: '',
        lastName: '',
        password: '',
        phone1: '',
        phone1Extension: '',
        roles: [],
        shippingAddress: {
          addressName: '',
          city: '',
          country: '',
          door: '',
          floor: '',
          number: '',
          street: '',
          street2: '',
          zip: '',
      },
        billingAddress: {
          addressName: '',
          city: '',
          country: '',
          door: '',
          floor: '',
          number: '',
          street: '',
          street2: '',
          zip: '',
      },
    }
  }

}