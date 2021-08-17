import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "~/shared/shared.module";
import { AccountRoutingModule } from "./account-routing.module";
import { SettingsComponent } from "./settings/settings.component";

@NgModule({
  declarations: [SettingsComponent],
  imports: [CommonModule, SharedModule, AccountRoutingModule],
})
export class AccountModule {}
