import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { NgApexchartsModule } from "ng-apexcharts";
import { NgZorroAntdModule } from "./ng-zorro-antd.module";
import { ExampleComponent, TagPickerComponent, NgCardComponent } from "../components";

@NgModule({
  imports: [CommonModule, FormsModule, NgZorroAntdModule, NgApexchartsModule],
  declarations: [ExampleComponent, TagPickerComponent, NgCardComponent],
  exports: [
    FormsModule,
    NgZorroAntdModule,
    NgApexchartsModule,
    ExampleComponent,
    TagPickerComponent,
    NgCardComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
