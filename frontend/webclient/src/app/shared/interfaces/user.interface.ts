import { FormControl, FormGroup } from "@angular/forms";

export interface Authentication {
    jwtToken: string;
}

export interface LoggedInUserData {
    jwtToken: string | null;
    user: User | null;
}

export interface TokenPayload {
    roles: Role[];
    sub: string;
    iat: number;
    exp: number;
}

export interface Role {
    authority: string;
}

export interface User {
    email: string;
    username: string;
    firstName: string;
    lastName: string;  
    password: string;
    phone1: string;
    phone1Extension: string;
    roles: string[] | null;
  
    shippingAddress: Address;
    billingAddress: Address;
}

export interface Address {
    addressName: string;
    city: string;
    country: string;
    door: string;
    floor: string;
    number: string;
    street: string;
    street2: string;
    zip: string;
}

export interface UserForm {
    email: FormControl;
    username: FormControl;
    firstName: FormControl;
    lastName: FormControl;  
    password: FormControl;
    phone1: FormControl;
    phone1Extension: FormControl;
    roles: FormControl;
    
    shippingAddress: FormGroup<AddressForm>;
    billingAddress: FormGroup<AddressForm>;
}

export interface AddressForm {
    addressName: FormControl;
    city: FormControl;
    country: FormControl;
    door: FormControl;
    floor: FormControl;
    number: FormControl;
    street: FormControl;
    street2: FormControl;
    zip: FormControl;
}