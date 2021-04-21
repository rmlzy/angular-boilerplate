import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { E404Component } from "./e404/e404.component";
import { E500Component } from "./e500/e500.component";
import { MaintenanceComponent } from "./maintenance/maintenance.component";
import { AjaxComponent } from "./ajax/ajax.component";
import { ButtonsComponent } from "./buttons/buttons.component";
import { TypographyComponent } from "./typography/typography.component";
import { CustomComponentsComponent } from "./custom-components/custom-components.component";

const routes: Routes = [
  { path: "typography", component: TypographyComponent },
  { path: "buttons", component: ButtonsComponent },
  { path: "404", component: E404Component },
  { path: "500", component: E500Component },
  { path: "maintenance", component: MaintenanceComponent },
  { path: "ajax", component: AjaxComponent },
  { path: "custom-components", component: CustomComponentsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InterfaceRoutingModule {}
