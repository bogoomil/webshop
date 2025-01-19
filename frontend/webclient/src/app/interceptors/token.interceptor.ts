import { HttpEvent, HttpHandler, HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { inject } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable, switchMap, take } from "rxjs";
import { selectJwtToken } from "../user/store/user.selectors";

export function tokenInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<any>> {
  let store = inject(Store);
  return store.select(selectJwtToken).pipe(
    take(1),
    switchMap(token => {
      if(token){
        const cloned = req.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`,
          },
        });
        return next(cloned);
      }
      return next(req);
    })
  )
}