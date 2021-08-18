import { registerLocaleData } from "@angular/common";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import zh from "@angular/common/locales/zh";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NZ_I18N, zh_CN } from "ng-zorro-antd/i18n";
import { CookieService } from "ngx-cookie-service";
import { AjaxInterceptor, CoreModule } from "~/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

registerLocaleData(zh);

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CoreModule,
  ],
  providers: [
    CookieService,
    { provide: NZ_I18N, useValue: zh_CN },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AjaxInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
