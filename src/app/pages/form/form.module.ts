import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "~/shared/shared.module";
import { AdvancedComponent } from "./advanced/advanced.component";
import { BasicComponent } from "./basic/basic.component";
import { FormRoutingModule } from "./form-routing.module";

@NgModule({
  declarations: [BasicComponent, AdvancedComponent],
  imports: [CommonModule, SharedModule, FormRoutingModule],
})
export class FormModule {}
