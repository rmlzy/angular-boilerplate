import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { environment } from '~/environments/environment';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  constructor(private cookieService: CookieService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    // 补全 URL
    let url = environment.ajaxBaseUrl;
    if (request.url.startsWith('/')) {
      url += request.url;
    } else {
      url += `/${request.url}`;
    }

    // 在 Header 中附加 Token
    const token = this.cookieService.get('token');
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    if (token) {
      headers = headers.append('token', token);
    }

    const cloned = request.clone({ url, headers });
    return next.handle(cloned);
  }
}
