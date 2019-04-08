import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BizRoutingModule } from './biz-routing.module';
import { SimpleTableComponent } from './simple-table/simple-table.component';
import { SearchTableComponent } from './search-table/search-table.component';
import { DataTableComponent } from './data-table/data-table.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { StepFormComponent } from './step-form/step-form.component';
import { AdvancedFormComponent } from './advanced-form/advanced-form.component';
import { SimpleProfileComponent } from './simple-profile/simple-profile.component';
import { AdvancedProfileComponent } from './advanced-profile/advanced-profile.component';
import { ExceptionComponent } from './exception/exception.component';
import { MdEditorComponent } from './md-editor/md-editor.component';
import { EchartsComponent } from './echarts/echarts.component';

@NgModule({
  declarations: [SimpleTableComponent, SearchTableComponent, DataTableComponent, SimpleFormComponent, StepFormComponent, AdvancedFormComponent, SimpleProfileComponent, AdvancedProfileComponent, ExceptionComponent, MdEditorComponent, EchartsComponent],
  imports: [
    CommonModule,
    BizRoutingModule
  ]
})
export class BizModule { }
