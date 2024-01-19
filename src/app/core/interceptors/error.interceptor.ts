import { Injectable, Provider } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private notification: NzNotificationService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMsg = '';
        if (error.error instanceof ErrorEvent) {
          console.log('this is client side error');
          errorMsg = `Error: ${error.error.message}`;
        } else {
          console.log('this is server side error');
          errorMsg = `Error Code: ${error.status}, Message: ${error.message}`;
        }
        console.log(errorMsg);
        this.notification.error('Error', errorMsg);
        return throwError(() => errorMsg);
      })
    );
  }
}

export const ErrorInterceptorProvider: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: ErrorInterceptor,
  multi: true,
};
