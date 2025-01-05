import { HttpEvent, HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

export function baseurlInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
    console.log('modifying base url:' + req.url);
    const apiReq = req.clone({ url: 'http://localhost:8080' + req.url} );
    console.log('apiReq:' + apiReq.url);
    return next(apiReq);
  }