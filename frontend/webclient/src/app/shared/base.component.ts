import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import AuthService from "../user/services/auth.service";
import { selectLoggedIn } from "../user/store/user.selectors";


export default class BaseComponent {
  loggedIn$: Observable<boolean>;
  constructor(
    protected store: Store,
    protected authservice: AuthService
  ) {
    this.loggedIn$ = store.select(selectLoggedIn);
  }

  hasRole(roleName: string) : boolean {
    return this.authservice.hasRole(roleName);
  }
}
