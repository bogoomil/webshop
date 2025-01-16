import { Store } from '@ngrx/store';
import { Component, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AddressForm, User, UserForm } from '../../../shared/interfaces/auth.interface';
import { MatFormFieldModule } from '@angular/material/form-field';
import { merge, Observable } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import UserService from '../../services/user.service';
import { ServiceArea, Shop } from '../../../shared/interfaces/shop.interface';
import { selectServiceAreas } from '../../../shared/store/shop.selectors';
import UserBaseComponent from './user-base.component';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-user-update',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  standalone: true,
  imports: [MatSelectModule, FlexLayoutModule, FormsModule, CommonModule, MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule, ReactiveFormsModule]
})
export class UserUpdateComponent extends UserBaseComponent implements OnInit{
  user?: User;
  buttonLabel = 'Mentés';
  create = false;
  registerForm: any;

  constructor(userService: UserService, store: Store<Shop>) {
    super(userService, store);
    this.user = this.userService.loadCurrentUser();
  }
  ngOnInit(): void {
    this.registerForm = new FormGroup<UserForm>({
      lastName: new FormControl(this.user?.lastName, Validators.required),
      firstName: new FormControl(this.user?.firstName, Validators.required),
      username: new FormControl(this.user?.username),
      email: new FormControl({ value: this.user?.email, disabled: true }, [Validators.required, Validators.email]),
      password: new FormControl(this.user?.password),
      phone1: new FormControl(this.user?.phone1, Validators.required),
      phone1Extension: new FormControl(this.user?.phone1Extension),
      shippingAddress: new FormGroup<AddressForm>({
        addressName: new FormControl(this.user?.shippingAddress.addressName),
        city: new FormControl(this.user?.shippingAddress.city),
        country: new FormControl(this.user?.shippingAddress.country),
        door: new FormControl(this.user?.shippingAddress.door),
        floor: new FormControl(this.user?.shippingAddress.floor),
        number: new FormControl(this.user?.shippingAddress.number, Validators.required),
        street: new FormControl(this.user?.shippingAddress.street, Validators.required),
        street2: new FormControl(this.user?.shippingAddress.street2),
        zip: new FormControl(this.user?.shippingAddress.zip, Validators.required)
      }),
      billingAddress: new FormGroup<AddressForm>({
        addressName: new FormControl(this.user?.billingAddress.addressName),
        city: new FormControl(this.user?.billingAddress.city),
        country: new FormControl(this.user?.billingAddress.country),
        door: new FormControl(this.user?.billingAddress.door),
        floor: new FormControl(this.user?.billingAddress.floor),
        number: new FormControl(this.user?.billingAddress.number),
        street: new FormControl(this.user?.billingAddress.street),
        street2: new FormControl(this.user?.billingAddress.street2),
        zip: new FormControl(this.user?.billingAddress.zip)
      })
    });
    }

  submit() {
    console.log('user: ' + JSON.stringify(this.registerForm.getRawValue()));
    this.userService.updateUser(this.registerForm.getRawValue());
  }

}