import { HttpEvent, HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

export function tokenInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  let jwtToken = sessionStorage.getItem('jwtToken');
  if (jwtToken) {
    const reqWithHeader = req.clone({
      headers: req.headers.set('Authorization', 'Bearer ' + sessionStorage.getItem('jwtToken')),
    });
    return next(reqWithHeader);
  }
  return next(req);
}