import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SharedModule } from "../../shared/shared.module";
import { GeneralRoutingModule } from "./general-routing.module";
import { E404Component } from "./e404/e404.component";
import { E500Component } from "./e500/e500.component";
import { MaintenanceComponent } from "./maintenance/maintenance.component";
import { AjaxComponent } from './ajax/ajax.component';
import { ButtonsComponent } from './buttons/buttons.component';

@NgModule({
  declarations: [E404Component, E500Component, MaintenanceComponent, AjaxComponent, ButtonsComponent],
  imports: [CommonModule, SharedModule, GeneralRoutingModule],
})
export class GeneralModule {}
