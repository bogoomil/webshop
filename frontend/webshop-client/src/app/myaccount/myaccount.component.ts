import { Component, OnInit } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import AuthService from './services/auth.service';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { SignupComponent } from "./signup/signup.component";

@Component({
  selector: 'app-myaccount',
  imports: [LoginComponent, CommonModule, MatTabsModule, MatButtonModule, SignupComponent],
  templateUrl: './myaccount.component.html',
  styleUrl: './myaccount.component.css'
})
export class MyaccountComponent{
  loggedIn$: Observable<boolean>;
  constructor(
    private store: Store<{ loggedIn: boolean }>,
    private authservice: AuthService
  ) {
    this.loggedIn$ = store.select('loggedIn');
  }

  logout() {
    this.authservice.logout();
  }

}
