import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ThemeRoutingModule } from './theme-routing.module';
import {
  AppHeaderComponent,
  AppBodyComponent,
  AppAsideComponent,
  AppFooterComponent
} from './components';
import { DefaultComponent, BlankComponent } from './layouts';

const COMPONENTS = [DefaultComponent, AppHeaderComponent];

@NgModule({
  declarations: [
    ...COMPONENTS,
    AppHeaderComponent,
    AppFooterComponent,
    AppAsideComponent,
    BlankComponent,
    AppBodyComponent
  ],
  imports: [CommonModule, NgZorroAntdModule, ThemeRoutingModule]
})
export class ThemeModule {}
