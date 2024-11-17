import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');

    if (token) {
      console.log('Token found. Adding to headers.');
      request = request.clone({
        headers: request.headers.set('Authorization', `Bearer ${token}`),
      });
    } else {
      console.warn('Token not found in localStorage.');
    }

    return next.handle(request).pipe(
      catchError((error) => {
        console.error('Error response:', error);
        if (error.status === 401) {
          console.warn('Unauthorized request. Redirecting to sign-in.');
          localStorage.removeItem('token');
          this.router.navigate(['/sign-in']);
        }
        return throwError(() => error);
      })
    );
  }
}
