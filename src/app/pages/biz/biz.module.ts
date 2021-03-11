import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from '../../ng-zorro-antd.module';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxAmapModule } from 'ngx-amap';
import { UEditorModule } from 'ngx-ueditor';

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
import { AmapComponent } from './amap/amap.component';
import { UeditorComponent } from './ueditor/ueditor.component';
import { CustomComponentComponent } from './custom-component/custom-component.component';

// custom components
import { CustomBtnComponent } from '../../components/custom-btn/custom-btn.component';

@NgModule({
  declarations: [
    SimpleTableComponent,
    SearchTableComponent,
    DataTableComponent,
    SimpleFormComponent,
    StepFormComponent,
    AdvancedFormComponent,
    SimpleProfileComponent,
    AdvancedProfileComponent,
    ExceptionComponent,
    MdEditorComponent,
    EchartsComponent,
    AmapComponent,
    UeditorComponent,
    CustomComponentComponent,
    CustomBtnComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BizRoutingModule,
    NgZorroAntdModule,
    NgxEchartsModule,
    NgxAmapModule.forRoot({
      // a sample key, please register your key at https://lbs.amap.com/
      apiKey: '9e7b9f938691f60715ddae07436cdacd'
    }),
    UEditorModule.forRoot({
      js: [
        `../../assets/ueditor/ueditor.config.js`,
        `../../assets/ueditor/ueditor.all.min.js`
      ],
      // 默认前端配置项
      options: {
        UEDITOR_HOME_URL: '../../assets/ueditor/'
      }
    })
  ]
})
export class BizModule { }
