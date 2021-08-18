import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { NzModalService } from "ng-zorro-antd/modal";
import { Observable } from "rxjs";
import { filter, timeout } from "rxjs/operators";

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {
  constructor(private router: Router, private modalService: NzModalService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next
      .handle(request)
      .pipe(
        filter((event: any) => {
          if (event instanceof HttpResponse) {
            const res = event.body;

            // 未登录
            if (res.statusCode === 401) {
              this.router.navigateByUrl("/login");
              return false;
            }

            if (res.statusCode !== 200) {
              this.modalService.error({ nzTitle: "Error", nzContent: res.message });
              return false;
            }
          }
          return true;
        })
      )
      .pipe(timeout(1000 * 30));
  }
}
