import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SharedModule } from "../shared/shared.module";
import { ThemeRoutingModule } from "./theme-routing.module";
import {
  AppHeaderComponent,
  AppBodyComponent,
  AppAsideComponent,
  AppFooterComponent,
} from "./components";
import { DefaultComponent, BlankComponent } from "./layouts";

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
