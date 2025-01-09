import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import AuthService from "../myaccount/services/auth.service";

export default class BaseComponent {
  loggedIn$: Observable<boolean>;
  constructor(
    protected store: Store<{ loggedIn: boolean }>,
    protected authservice: AuthService
  ) {
    this.loggedIn$ = store.select('loggedIn');
  }

  hasRole(roleName: string) : boolean {
    return this.authservice.hasRole(roleName);
  }
}
