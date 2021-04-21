import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BasicComponent } from "./basic/basic.component";

const routes: Routes = [
  { path: "basic", component: BasicComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRoutingModule {
}
