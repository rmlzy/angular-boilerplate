import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgApexchartsModule } from "ng-apexcharts";
import { NgZorroAntdModule } from "./ng-zorro-antd.module";
import { ExampleComponent, TagPickerComponent, NgCardComponent } from "../components";

const globalCmpts = [ExampleComponent, TagPickerComponent, NgCardComponent];

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
