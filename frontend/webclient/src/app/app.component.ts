import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { login } from './user/store/authstore.actions';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import BaseComponent from './shared/base.component';
import AuthService from './user/services/auth.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, 
    MatTabsModule, MatIconModule, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent extends BaseComponent implements OnInit{
  title = 'Hathi';
  activeLink = '';

   constructor(
     store: Store<{ loggedIn: boolean }>,
     authservice: AuthService
   ) {
     super(store, authservice)
   }
 
  ngOnInit(): void {
    console.log('INIT APP COMPONENT');
    let jwtToken = sessionStorage.getItem('jwtToken');
    if (jwtToken) {
      this.store.dispatch(login());
    }
  }
}
