import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SharedModule } from "../../shared/shared.module";
import { GeneralRoutingModule } from "./general-routing.module";
import { ButtonComponent } from "./button/button.component";

@NgModule({
  declarations: [ButtonComponent],
  imports: [CommonModule, SharedModule, GeneralRoutingModule],
})
export class GeneralModule {}
