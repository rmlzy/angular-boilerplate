import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from '~/core';
import { UserDeleteBtnComponent } from './components/user-delete-btn/user-delete-btn.component';
import { UserUpdateBtnComponent } from './components/user-update-btn/user-update-btn.component';
import { ListComponent } from './list/list.component';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [ListComponent, UserUpdateBtnComponent, UserDeleteBtnComponent],
  imports: [CommonModule, CoreModule, UserRoutingModule],
})
export class UserModule {}
