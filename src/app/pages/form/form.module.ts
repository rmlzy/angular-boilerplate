import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SharedModule } from "../../shared/shared.module";
import { FormRoutingModule } from "./form-routing.module";
import { BasicComponent } from "./basic/basic.component";

@NgModule({
  declarations: [BasicComponent],
  imports: [CommonModule, SharedModule, FormRoutingModule]
})
export class FormModule {
}
