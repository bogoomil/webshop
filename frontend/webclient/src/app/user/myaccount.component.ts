import { Component, OnInit } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import AuthService from './services/auth.service';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import BaseComponent from '../../app/shared/base.component';
import { UserCreateComponent } from "./components/userdata/user-create.component";
import { UserUpdateComponent } from "./components/userdata/user-update.component";

@Component({
  selector: 'app-myaccount',
  imports: [LoginComponent, CommonModule, MatTabsModule, MatButtonModule, UserCreateComponent, UserUpdateComponent],
  templateUrl: './myaccount.component.html',
  styleUrl: './myaccount.component.css',
  standalone: true
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
