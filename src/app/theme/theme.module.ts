import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { SharedModule } from "../shared/shared.module";
import {
  AppAsideComponent,
  AppBodyComponent,
  AppFooterComponent,
  AppHeaderComponent,
} from "./components";
import { BlankComponent, DefaultComponent } from "./layouts";
import { ThemeRoutingModule } from "./theme-routing.module";

@NgModule({
  declarations: [
    DefaultComponent,
    AppHeaderComponent,
    AppBodyComponent,
    AppAsideComponent,
    AppFooterComponent,
    BlankComponent,
  ],
  imports: [CommonModule, SharedModule, ThemeRoutingModule],
})
export class ThemeModule {}
