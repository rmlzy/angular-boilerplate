import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CookieService } from "ngx-cookie-service";
import { Observable } from "rxjs";
import { environment } from "~/environments/environment";

@Injectable()
export class AjaxInterceptor implements HttpInterceptor {
  constructor(private cookieService: CookieService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // 补全 URL
    const { ajaxBaseUrl } = environment;
    const fullUrl = request.url.startsWith("/")
      ? `${ajaxBaseUrl}${request.url}`
      : `${ajaxBaseUrl}/${request.url}`;

    // Header 中附加 token
    const token = this.cookieService.get("token");
    let headers = new HttpHeaders();
    if (token) {
      headers = headers.append("token", token);
    }

    const clonedReq = request.clone({
      url: fullUrl,
      headers,
    });
    return next.handle(clonedReq);
  }
}
