import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CoreModule } from "~/core";
import { ListComponent } from "./list/list.component";
import { UserRoutingModule } from "./user-routing.module";

@NgModule({
  declarations: [ListComponent],
  imports: [CommonModule, CoreModule, UserRoutingModule],
})
export class UserModule {}
