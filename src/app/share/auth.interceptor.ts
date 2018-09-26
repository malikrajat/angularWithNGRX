import {HttpEvent, HttpHandler, HttpInterceptor} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import {AuthService} from '../auth/auth.service';

@Injectable()
export  class AuthInterceptor implements HttpInterceptor {

  constructor(
    private authservices: AuthService
  ) {}
  intercept(req: HttpInterceptor<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // const requestClone = req.clone({headers: req.headers.set('', '')})
    const requestClone = req.clone({params: req.params.set('auth', this.authservices.getToken())});
    return next.handle(requestClone);
  }
}
