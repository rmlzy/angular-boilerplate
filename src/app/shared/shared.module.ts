import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import * as echarts from "echarts/core";
import { NgxEchartsModule } from "ngx-echarts";
import { BarChart } from "echarts/charts";
import { TitleComponent, TooltipComponent, GridComponent } from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";
import "../config/echart.theme";

import { NgZorroAntdModule } from "./ng-zorro-antd.module";

import { ExampleComponent, TagPickerComponent } from "../components";

echarts.use([TitleComponent, TooltipComponent, GridComponent, BarChart, CanvasRenderer]);

@NgModule({
  imports: [CommonModule, FormsModule, NgZorroAntdModule, NgxEchartsModule.forRoot({ echarts })],
  declarations: [ExampleComponent, TagPickerComponent],
  exports: [FormsModule, NgZorroAntdModule, NgxEchartsModule, ExampleComponent, TagPickerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
