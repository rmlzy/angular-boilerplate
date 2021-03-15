import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SimpleTableComponent } from "./simple-table/simple-table.component";
import { BigdataTableComponent } from "./bigdata-table/bigdata-table.component";

const routes: Routes = [
  { path: "simple-table", component: SimpleTableComponent },
  { path: "bigdata-table", component: BigdataTableComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BizRoutingModule {}
