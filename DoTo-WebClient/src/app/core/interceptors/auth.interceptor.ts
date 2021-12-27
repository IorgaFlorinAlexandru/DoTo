import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { tap } from "rxjs/operators";
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private router: Router) {}


  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (localStorage.getItem('token') != null) {
        const clonedRequest = request.clone({
            headers: request.headers.set('Authorization', 'Bearer ' + localStorage.getItem('token'))
        });
        return next.handle(clonedRequest).pipe(
            tap(
                () => { },
                (error) => {
                    if (error.status == 401 || error.status == 400){
                        localStorage.removeItem('token');
                        this.router.navigateByUrl('/auth');
                    }
                }
            )
        )
    }
    else
        return next.handle(request.clone());
}
}
