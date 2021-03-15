import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SharedModule } from "../../shared/shared.module";
import { InterfaceRoutingModule } from "./interface-routing.module";
import { ButtonsComponent } from "./buttons/buttons.component";

@NgModule({
  declarations: [ButtonsComponent],
  imports: [CommonModule, SharedModule, InterfaceRoutingModule],
})
export class InterfaceModule {}
