import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import AuthService from "../user/services/auth.service";
import { hasSuchRole, selectLoggedIn } from "../user/store/user.selectors";


export default class BaseComponent {
  loggedIn$: Observable<boolean>;
  hasRoleAdmin$: Observable<boolean>;
  constructor(
    protected store: Store,
    protected authservice: AuthService
  ) {
    this.loggedIn$ = store.select(selectLoggedIn);
    this.hasRoleAdmin$ = store.select(hasSuchRole('ROLE_ADMIN')) ;
  }

}
