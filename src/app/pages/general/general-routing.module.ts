import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { E404Component } from "./e404/e404.component";
import { E500Component } from "./e500/e500.component";
import { MaintenanceComponent } from "./maintenance/maintenance.component";
import { AjaxComponent } from "./ajax/ajax.component";

const routes: Routes = [
  { path: "404", component: E404Component },
  { path: "500", component: E500Component },
  { path: "maintenance", component: MaintenanceComponent },
  { path: "ajax", component: AjaxComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GeneralRoutingModule {}
