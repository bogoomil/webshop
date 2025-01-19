import { Store } from '@ngrx/store';
import { Component, EventEmitter, OnInit, Output, signal } from '@angular/core';
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
import UserBaseComponent from './user-base.component';
import { MatSelectModule } from '@angular/material/select';
import { selectUser } from '../../store/user.selectors';
import { updateUser } from '../../store/user.actions';

@Component({
  selector: 'app-user-data',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  standalone: true,
  imports: [MatSelectModule, FlexLayoutModule, FormsModule, CommonModule, MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule, ReactiveFormsModule]
})
export class UserUpdateComponent extends UserBaseComponent{
  buttonLabel = 'Megrendelés';
  create = false;

  @Output() dataEmitter = new EventEmitter<{ user: User }>();

  constructor(userService: UserService, store: Store) {
    super(userService, store);

    store.select(selectUser).subscribe(user => {
      this.registerForm = new FormGroup<UserForm>({
        lastName: new FormControl(user?.lastName, Validators.required),
        firstName: new FormControl(user?.firstName, Validators.required),
        username: new FormControl(user?.username),
        email: new FormControl({ value: user?.email, disabled: false }, [Validators.required, Validators.email]),
        password: new FormControl(user?.password),
        phone1: new FormControl(user?.phone1, Validators.required),
        phone1Extension: new FormControl(user?.phone1Extension),
        roles: new FormControl(null),
        shippingAddress: new FormGroup<AddressForm>({
          addressName: new FormControl(user?.shippingAddress.addressName),
          city: new FormControl(user?.shippingAddress.city),
          country: new FormControl(user?.shippingAddress.country),
          door: new FormControl(user?.shippingAddress.door),
          floor: new FormControl(user?.shippingAddress.floor),
          number: new FormControl(user?.shippingAddress.number, Validators.required),
          street: new FormControl(user?.shippingAddress.street, Validators.required),
          street2: new FormControl(user?.shippingAddress.street2),
          zip: new FormControl(user?.shippingAddress.zip, Validators.required)
        }),
        billingAddress: new FormGroup<AddressForm>({
          addressName: new FormControl(user?.billingAddress.addressName),
          city: new FormControl(user?.billingAddress.city),
          country: new FormControl(user?.billingAddress.country),
          door: new FormControl(user?.billingAddress.door),
          floor: new FormControl(user?.billingAddress.floor),
          number: new FormControl(user?.billingAddress.number),
          street: new FormControl(user?.billingAddress.street),
          street2: new FormControl(user?.billingAddress.street2),
          zip: new FormControl(user?.billingAddress.zip)
        })
      });
  
    })
  }

  submit() {
    this.dataEmitter.emit({user: this.registerForm.getRawValue()});
  }

}