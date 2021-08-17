import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgApexchartsModule } from "ng-apexcharts";
import { ExampleComponent, NzFooterBarComponent, TagPickerComponent } from "../components";
import { NgZorroAntdModule } from "./ng-zorro-antd.module";

const globalCmpts = [ExampleComponent, TagPickerComponent, NzFooterBarComponent];

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NgZorroAntdModule, NgApexchartsModule],
  declarations: [...globalCmpts],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    NgApexchartsModule,
    ...globalCmpts,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
