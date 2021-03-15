import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SharedModule } from "../../shared/shared.module";
import { BizRoutingModule } from "./biz-routing.module";
import { SimpleTableComponent } from "./simple-table/simple-table.component";

@NgModule({
  declarations: [SimpleTableComponent],
  imports: [CommonModule, SharedModule, BizRoutingModule],
})
export class BizModule {}
