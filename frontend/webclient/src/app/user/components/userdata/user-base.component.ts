import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import UserService from "../../services/user.service";
import { signal } from "@angular/core";
import { AddressForm, UserForm } from "../../../shared/interfaces/user.interface";
import { FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { selectServiceAreas } from '../../../shared/store/shop.selectors';
import { ServiceArea, Shop } from '../../../shared/interfaces/shop.interface';
import { updateUser } from "../../store/user.actions";

export default class UserBaseComponent {

    serviceAreas$: Observable<ServiceArea[]>;
    registerForm: any;

    constructor(
        protected userService: UserService,
        protected store: Store,
    ) {
        this.serviceAreas$ = store.select(selectServiceAreas);
    }

    hide = signal(true);

    clickEvent(event: MouseEvent) {
        this.hide.set(!this.hide());
        event.stopPropagation();
    }

    public emitZipChange(){
    }

    public updateStore(){
        this.store.dispatch(updateUser({ user: this.registerForm.getRawValue() }));
      }
    
}
