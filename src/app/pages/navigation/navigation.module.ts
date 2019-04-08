import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { NavigationRoutingModule } from './navigation-routing.module';
import { AffixComponent } from './affix/affix.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { MenuComponent } from './menu/menu.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { PaginationComponent } from './pagination/pagination.component';
import { StepsComponent } from './steps/steps.component';

@NgModule({
  declarations: [
    AffixComponent,
    BreadcrumbComponent,
    DropdownComponent,
    MenuComponent,
    PageHeaderComponent,
    PaginationComponent,
    StepsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgZorroAntdModule,
    NavigationRoutingModule
  ]
})
export class NavigationModule {}
