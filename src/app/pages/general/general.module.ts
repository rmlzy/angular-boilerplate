import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgZorroAntdModule } from 'ng-zorro-antd';
import { GeneralRoutingModule } from './general-routing.module';
import { ButtonComponent } from './button/button.component';
import { IconComponent } from './icon/icon.component';
import { GridComponent } from './grid/grid.component';

@NgModule({
  declarations: [ButtonComponent, IconComponent, GridComponent],
  imports: [CommonModule, FormsModule, GeneralRoutingModule, NgZorroAntdModule]
})
export class GeneralModule {}
