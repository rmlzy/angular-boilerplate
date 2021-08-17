import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdvancedComponent } from "./advanced/advanced.component";
import { BasicComponent } from "./basic/basic.component";

const routes: Routes = [
  { path: "", redirectTo: "/basic", pathMatch: "full" },
  { path: "basic", component: BasicComponent },
  { path: "advanced", component: AdvancedComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormRoutingModule {}
