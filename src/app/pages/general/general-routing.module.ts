import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ButtonComponent } from "./button/button.component";
import { E404Component } from "./e404/e404.component";

const routes: Routes = [
  { path: "button", component: ButtonComponent },
  { path: "404", component: E404Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GeneralRoutingModule {}
