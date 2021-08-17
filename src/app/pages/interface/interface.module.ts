import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { SharedModule } from "../../shared/shared.module";
import { AccordionComponent } from "./accordion/accordion.component";
import { AjaxComponent } from "./ajax/ajax.component";
import { BlankComponent } from "./blank/blank.component";
import { ButtonsComponent } from "./buttons/buttons.component";
import { CustomComponentsComponent } from "./custom-components/custom-components.component";
import { E404Component } from "./e404/e404.component";
import { E500Component } from "./e500/e500.component";
import { EmptyComponent } from "./empty/empty.component";
import { InterfaceRoutingModule } from "./interface-routing.module";
import { MaintenanceComponent } from "./maintenance/maintenance.component";
import { TypographyComponent } from "./typography/typography.component";

@NgModule({
  declarations: [
    E404Component,
    E500Component,
    MaintenanceComponent,
    AjaxComponent,
    ButtonsComponent,
    TypographyComponent,
    CustomComponentsComponent,
    EmptyComponent,
    AccordionComponent,
    BlankComponent,
  ],
  imports: [CommonModule, SharedModule, InterfaceRoutingModule],
})
export class InterfaceModule {}
