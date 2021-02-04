import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UrlInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const dupReq = request.clone({
      url: `https://us-central1-js04-b4877.cloudfunctions.net/${request.url}`,
      headers:  request.headers.set('Application', 'JSON')
    });
    return next.handle(dupReq);
  }
}
