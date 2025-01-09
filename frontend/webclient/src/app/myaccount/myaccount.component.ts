import { Component, OnInit } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import AuthService from './services/auth.service';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { SignupComponent } from "./components/signup/signup.component";
import BaseComponent from '../shared/base.component';

@Component({
  selector: 'app-myaccount',
  imports: [LoginComponent, CommonModule, MatTabsModule, MatButtonModule, SignupComponent],
  templateUrl: './myaccount.component.html',
  styleUrl: './myaccount.component.css'
})
export class MyaccountComponent extends BaseComponent{
  constructor(
    store: Store<{ loggedIn: boolean }>,
    authservice: AuthService
  ) {
    super(store, authservice)
  }

  logout() {
    this.authservice.logout();
  }
}
