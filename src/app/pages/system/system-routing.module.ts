import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BlankComponent } from "~/theme/layouts";

const routes: Routes = [
  {
    path: "",
    component: BlankComponent,
    children: [
      {
        path: "user",
        loadChildren: () => import("./user/user.module").then((m) => m.UserModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SystemRoutingModule {}
