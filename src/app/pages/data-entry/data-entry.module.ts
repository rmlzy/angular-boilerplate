import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgZorroAntdModule } from 'ng-zorro-antd';
import { DataEntryRoutingModule } from './data-entry-routing.module';
import { InputComponent } from './input/input.component';
import { CheckboxComponent } from './checkbox/checkbox.component';

@NgModule({
  declarations: [InputComponent, CheckboxComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgZorroAntdModule,
    DataEntryRoutingModule
  ]
})
export class DataEntryModule {}
