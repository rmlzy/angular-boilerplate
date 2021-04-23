import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "@/shared/shared.module";
import { FormRoutingModule } from "./form-routing.module";
import { BasicComponent } from "./basic/basic.component";
import { AdvancedComponent } from "./advanced/advanced.component";

@NgModule({
  declarations: [BasicComponent, AdvancedComponent],
  imports: [CommonModule, SharedModule, FormRoutingModule],
})
export class FormModule {}
