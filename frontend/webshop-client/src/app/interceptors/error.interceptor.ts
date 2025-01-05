import { HttpErrorResponse, HttpEvent, HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { catchError, EMPTY, Observable } from "rxjs";
import AuthService from "../services/auth.service";
import { inject } from "@angular/core";

export function errorInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
    const authService = inject(AuthService);
    return next(req).pipe(
        catchError((error: HttpErrorResponse) => {
            console.log('error: ' + error.status);
            if(error.status === 401){
                console.log('removing jwt token')
                sessionStorage.removeItem('jwtToken');
                authService.logout();
            }
            if (error.error instanceof Error) {
                // A client-side or network error occurred. Handle it accordingly.
                console.error('An error occurred:', error.error.message);
            } else {
                // The backend returned an unsuccessful response code.
                // The response body may contain clues as to what went wrong,
                console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
            }

            // If you want to return a new response:
            //return of(new HttpResponse({body: [{name: "Default value..."}]}));

            // If you want to return the error on the upper level:
            //return throwError(error);

            // or just return nothing:
            return EMPTY;
        }));
}