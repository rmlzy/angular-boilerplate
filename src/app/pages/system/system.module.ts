import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from '~/core';
import { SystemRoutingModule } from './system-routing.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, CoreModule, SystemRoutingModule],
})
export class SystemModule {}
