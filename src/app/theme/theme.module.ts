import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CoreModule } from "~/core/core.module";
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
  imports: [CommonModule, CoreModule, ThemeRoutingModule],
})
export class ThemeModule {}
