import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ListComponent } from './list/list.component';

import { MenuRoutingModule } from './menu-routing.module';

@NgModule({
  declarations: [ListComponent],
  imports: [CommonModule, MenuRoutingModule],
})
export class MenuModule {}
