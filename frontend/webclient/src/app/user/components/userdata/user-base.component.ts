import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import UserService from "../../services/user.service";
import { signal } from "@angular/core";
import { AddressForm, UserForm } from "../../../shared/interfaces/user.interface";
import { FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { selectServiceAreas } from '../../../shared/store/shop.selectors';
import { ServiceArea, Shop } from '../../../shared/interfaces/shop.interface';

export default class UserBaseComponent {

    serviceAreas$: Observable<ServiceArea[]>;

    constructor(
        protected userService: UserService,
        protected store: Store<Shop>,
    ) {
        this.serviceAreas$ = store.select(selectServiceAreas);
    }

    hide = signal(true);

    clickEvent(event: MouseEvent) {
        this.hide.set(!this.hide());
        event.stopPropagation();
    }

}
