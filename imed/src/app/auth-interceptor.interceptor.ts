import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from 'src/services/AuthService';

@Injectable()
export class AuthInterceptorInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(this.authService.token){
      request=request.clone({
        headers: request.headers.set('authorization',"Bearer "+this.authService.token)
      });
    }
    return next.handle(request);
  }
}

export const AuthInterceptorInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptorInterceptor,
  multi: true,
};
