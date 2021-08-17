import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { NzModalService } from "ng-zorro-antd/modal";
import { CookieService } from "ngx-cookie-service";
import { IResponse } from "~/interfaces";

export interface ILoginFormData {
  username: string;
  password: string;
}

@Injectable({
  providedIn: "root",
})
export class LoginService {
  constructor(
    private router: Router,
    private http: HttpClient,
    private modal: NzModalService,
    private cookieService: CookieService
  ) {}

  async submit(formData: ILoginFormData) {
    const res = await this.http.post<IResponse<string>>("/login", formData).toPromise();
    if (res.statusCode !== 200) {
      this.modal.error({ nzTitle: "报错", nzContent: res.message });
      return;
    }
    this.cookieService.set("token", res.data);
    await this.router.navigateByUrl("/");
  }
}
