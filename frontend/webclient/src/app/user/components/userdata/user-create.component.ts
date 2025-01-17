import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AddressForm, User, UserForm } from '../../../shared/interfaces/user.interface';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import UserService from '../../services/user.service';
import { Store } from '@ngrx/store';
import UserBaseComponent from './user-base.component';
import { Shop } from '../../../shared/interfaces/shop.interface';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-user-create',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  standalone: true,
  imports: [MatSelectModule, FlexLayoutModule, FormsModule, CommonModule, MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule, ReactiveFormsModule]
})
export class UserCreateComponent extends UserBaseComponent {
  create = true;
  buttonLabel = 'Regisztráció';

  constructor(userService: UserService, store: Store<Shop>) {
    super(userService, store);
    this.registerForm = new FormGroup<UserForm>({
      lastName: new FormControl('', Validators.required),
      firstName: new FormControl('', Validators.required),
      username: new FormControl(''),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      phone1: new FormControl('', Validators.required),
      phone1Extension: new FormControl(''),
      roles: new FormControl(null),
      shippingAddress: new FormGroup<AddressForm>({
        addressName: new FormControl(''),
        city: new FormControl(''),
        country: new FormControl(''),
        door: new FormControl(''),
        floor: new FormControl(''),
        number: new FormControl('', Validators.required),
        street: new FormControl('', Validators.required),
        street2: new FormControl(''),
        zip: new FormControl('', Validators.required)
      }),
      billingAddress: new FormGroup<AddressForm>({
        addressName: new FormControl(''),
        city: new FormControl(''),
        country: new FormControl(''),
        door: new FormControl(''),
        floor: new FormControl(''),
        number: new FormControl(''),
        street: new FormControl(''),
        street2: new FormControl(''),
        zip: new FormControl('')
      })
    });
  
  }


  submit() {
    this.userService.signup(this.registerForm.getRawValue());
  }

}