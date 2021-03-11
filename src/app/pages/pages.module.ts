import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxEchartsModule } from 'ngx-echarts';

import { NgZorroAntdModule } from '../ng-zorro-antd.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../theme/theme.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [DashboardComponent, LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgZorroAntdModule,
    PagesRoutingModule,
    ThemeModule,
    NgxEchartsModule
  ]
})
export class PagesModule {}
