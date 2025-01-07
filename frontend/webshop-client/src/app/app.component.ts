import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { login } from './myaccount/store/authstore.actions';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatTabsModule, MatIconModule, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit{
  title = 'Hathi';
  activeLink = '';

  constructor(private store: Store){}

  ngOnInit(): void {
    console.log('INIT APP COMPONENT');
    let jwtToken = sessionStorage.getItem('jwtToken');
    if (jwtToken) {
      this.store.dispatch(login());
    }
  }
}
