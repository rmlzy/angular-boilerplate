import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SharedModule } from "../shared/shared.module";
import { PagesRoutingModule } from "./pages-routing.module";
import { ThemeModule } from "../theme/theme.module";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { LoginComponent } from "./login/login.component";

@NgModule({
  declarations: [DashboardComponent, LoginComponent],
  imports: [CommonModule, SharedModule, PagesRoutingModule, ThemeModule],
})
export class PagesModule {}
