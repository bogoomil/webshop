import { FlexLayoutModule } from '@angular/flex-layout';
import { Component, OnInit, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';

import { FormsModule } from '@angular/forms';
import AuthService from '../../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [FlexLayoutModule, CommonModule, MatButtonModule, MatDividerModule, MatIconModule, MatFormFieldModule, MatInputModule, FormsModule, MatTabsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {
  username: string = 'balazs.kun@gmail.com';
  password: string = 'z3rg3H3r3';
  hide = signal(true);

  constructor(
    private authservice: AuthService) {
  }

  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  ngOnInit(): void {
    console.log('INITIALIZING LOGIN COMPONENT');
  }

  login() {
    console.log('user:' + this.username + ", pass: " + this.password);
    this.authservice.login(this.username, this.password);
  }


}
