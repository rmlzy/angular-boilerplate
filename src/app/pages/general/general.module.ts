import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SharedModule } from "../../shared/shared.module";
import { GeneralRoutingModule } from "./general-routing.module";
import { ButtonComponent } from "./button/button.component";
import { E404Component } from './e404/e404.component';

@NgModule({
  declarations: [ButtonComponent, E404Component],
  imports: [CommonModule, SharedModule, GeneralRoutingModule],
})
export class GeneralModule {}
