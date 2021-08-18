import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { BlankComponent, DefaultComponent } from "../theme/layouts";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
  {
    path: "",
    component: DefaultComponent,
    children: [
      { path: "", component: DashboardComponent },
      // {
      //   path: "interface",
      //   loadChildren: () => import("./interface/interface.module").then((m) => m.InterfaceModule),
      // },
    ],
  },
  {
    path: "",
    component: BlankComponent,
    children: [{ path: "login", component: LoginComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
