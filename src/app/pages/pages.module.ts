import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { SharedModule } from "../shared/shared.module";
import { ThemeModule } from "../theme/theme.module";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { LoginComponent } from "./login/login.component";
import { PagesRoutingModule } from "./pages-routing.module";

@NgModule({
  declarations: [DashboardComponent, LoginComponent],
  imports: [CommonModule, SharedModule, PagesRoutingModule, ThemeModule],
})
export class PagesModule {}
