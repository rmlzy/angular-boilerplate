import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import * as echarts from "echarts/core";
import { NgxEchartsModule } from "ngx-echarts";
import { BarChart } from "echarts/charts";
import { TitleComponent, TooltipComponent, GridComponent } from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";
import "../config/echart.theme";

import { NgZorroAntdModule } from "./ng-zorro-antd.module";

import { ExampleComponent } from "../components/example/example.component";

echarts.use([TitleComponent, TooltipComponent, GridComponent, BarChart, CanvasRenderer]);

@NgModule({
  imports: [CommonModule, NgZorroAntdModule, NgxEchartsModule.forRoot({ echarts })],
  declarations: [ExampleComponent],
  exports: [NgZorroAntdModule, NgxEchartsModule, ExampleComponent],
})
export class SharedModule {}
