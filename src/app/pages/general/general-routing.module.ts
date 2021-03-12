import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ButtonComponent } from "./button/button.component";

const routes: Routes = [{ path: "button", component: ButtonComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GeneralRoutingModule {}
