import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import * as echarts from "echarts/core";
import { NgxEchartsModule } from "ngx-echarts";
import { BarChart } from "echarts/charts";
import { TitleComponent, TooltipComponent, GridComponent } from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";
import "../config/echart.theme";

import { NgZorroAntdModule } from "./ng-zorro-antd.module";

echarts.use([TitleComponent, TooltipComponent, GridComponent, BarChart, CanvasRenderer]);

@NgModule({
  imports: [CommonModule, NgZorroAntdModule, NgxEchartsModule.forRoot({ echarts })],
  declarations: [],
  exports: [NgZorroAntdModule, NgxEchartsModule],
})
export class SharedModule {}
