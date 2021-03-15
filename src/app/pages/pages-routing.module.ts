import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { DefaultComponent, BlankComponent } from "../theme/layouts";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
  {
    path: "",
    component: DefaultComponent,
    children: [
      { path: "", component: DashboardComponent },
      {
        path: "general",
        loadChildren: () => import("./general/general.module").then((m) => m.GeneralModule),
      },
      {
        path: "biz",
        loadChildren: () => import("./biz/biz.module").then((m) => m.BizModule),
      },
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
