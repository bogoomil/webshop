import { Component, OnInit, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import ApiService from '../../services/api.service';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import AuthService from '../../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [CommonModule, MatButtonModule, MatDividerModule, MatIconModule, MatFormFieldModule, MatInputModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit{
  loggedIn$: Observable<boolean>;
  username: string = 'balazs.kun@gmail.com';
  password: string = 'z3rg3H3r3';
  hide = signal(true);

  constructor(private store: Store<{ loggedIn: boolean }>, private api: ApiService, private authservice: AuthService) {
    this.loggedIn$ = store.select('loggedIn');
  }

  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  ngOnInit(): void {
    console.log('INITIALIZING LOGIN COMPONENT');
  }

  login(){
    console.log('user:' + this.username + ", pass: " + this.password);
    this.api.authenticate(this.username, this.password).subscribe(response => {
      this.authservice.login(response.jwttoken);
    });
  }

  logout(){
    this.authservice.logout();
  }

}
