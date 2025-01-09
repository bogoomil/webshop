import {Component, OnInit, signal} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AddressForm, User, UserForm } from '../../models/auth.interface';
import { MatFormFieldModule } from '@angular/material/form-field';
import { merge } from 'rxjs';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  standalone: true,
  imports: [FormsModule, CommonModule, MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule, ReactiveFormsModule]
})
export class SignupComponent {
  hide = signal(true);
  user: User = new User();
  registerForm = new FormGroup<UserForm>({
    lastName: new FormControl('', [Validators.required, Validators.email]),
    firstName: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    shippingAddress: new FormGroup<AddressForm>({
      addressName: new FormControl(''),
      city: new FormControl('', Validators.required)
    }
    )
  });

  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  submit(){
    console.log('user: ' + JSON.stringify(this.registerForm.getRawValue()));
  }


}