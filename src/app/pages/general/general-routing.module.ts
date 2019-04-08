import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButtonComponent } from './button/button.component';
import { IconComponent } from './icon/icon.component';
import { GridComponent } from './grid/grid.component';
import { AlertComponent } from './alert/alert.component';
import { DrawerComponent } from './drawer/drawer.component';
import { MessageComponent } from './message/message.component';
import { ModalComponent } from './modal/modal.component';
import { NotificationComponent } from './notification/notification.component';
import { PopconfirmComponent } from './popconfirm/popconfirm.component';
import { ProgressComponent } from './progress/progress.component';
import { SkeletonComponent } from './skeleton/skeleton.component';
import { SpinComponent } from './spin/spin.component';

const routes: Routes = [
  { path: 'button', component: ButtonComponent },
  { path: 'icon', component: IconComponent },
  { path: 'grid', component: GridComponent },
  { path: 'alert', component: AlertComponent },
  { path: 'drawer', component: DrawerComponent },
  { path: 'message', component: MessageComponent },
  { path: 'modal', component: ModalComponent },
  { path: 'notification', component: NotificationComponent },
  { path: 'popconfirm', component: PopconfirmComponent },
  { path: 'progress', component: ProgressComponent },
  { path: 'skeleton', component: SkeletonComponent },
  { path: 'spin', component: SpinComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneralRoutingModule {}
