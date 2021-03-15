import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SharedModule } from "../../shared/shared.module";
import { GeneralRoutingModule } from "./general-routing.module";
import { ButtonComponent } from "./button/button.component";
import { E404Component } from "./e404/e404.component";
import { E500Component } from "./e500/e500.component";
import { MaintenanceComponent } from "./maintenance/maintenance.component";

@NgModule({
  declarations: [ButtonComponent, E404Component, E500Component, MaintenanceComponent],
  imports: [CommonModule, SharedModule, GeneralRoutingModule],
})
export class GeneralModule {}
