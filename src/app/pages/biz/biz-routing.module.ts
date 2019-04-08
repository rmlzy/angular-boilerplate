import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
import { AmapComponent } from './amap/amap.component';
import { UeditorComponent } from './ueditor/ueditor.component';

const routes: Routes = [
  { path: 'simple-table', component: SimpleTableComponent },
  { path: 'search-table', component: SearchTableComponent },
  { path: 'data-table', component: DataTableComponent },
  { path: 'simple-form', component: SimpleFormComponent },
  { path: 'step-form', component: StepFormComponent },
  { path: 'advanced-form', component: AdvancedFormComponent },
  { path: 'simple-profile', component: SimpleProfileComponent },
  { path: 'advanced-profile', component: AdvancedProfileComponent },
  { path: 'exception', component: ExceptionComponent },
  { path: 'md-editor', component: MdEditorComponent },
  { path: 'ueditor', component: UeditorComponent },
  { path: 'echarts', component: EchartsComponent },
  { path: 'amap', component: AmapComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BizRoutingModule {}
