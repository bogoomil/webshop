import { Component, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AddressForm, User, UserForm } from '../../../shared/auth.interface';
import { MatFormFieldModule } from '@angular/material/form-field';
import { merge } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';  
import UserService from '../../services/user.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  standalone: true,
  imports: [FlexLayoutModule, FormsModule, CommonModule, MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule, ReactiveFormsModule]
})
export class UserUpdateComponent implements OnInit{
  user?: User;
  registerForm: any;
  buttonLabel = 'Mentés';

  constructor(private userService: UserService){}
  ngOnInit(): void {
    this.user = this.userService.loadCurrentUser();
    console.log("init user update component: " + JSON.stringify(this.user));
    this.registerForm = new FormGroup<UserForm>({
      lastName: new FormControl(this.user?.lastName, Validators.required),
      firstName: new FormControl(this.user?.firstName, Validators.required),
      username: new FormControl(this.user?.username),
      email: new FormControl({value: this.user?.email, disabled: true}, [Validators.required, Validators.email]),
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

  hide = signal(true);

  create = false;
  
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  submit() {
    console.log('user: ' + JSON.stringify(this.registerForm.getRawValue()));
    this.userService.updateUser(this.registerForm.getRawValue());
  }


}