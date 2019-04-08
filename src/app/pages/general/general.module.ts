import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { GeneralRoutingModule } from './general-routing.module';
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

@NgModule({
  declarations: [
    ButtonComponent,
    IconComponent,
    GridComponent,
    AlertComponent,
    DrawerComponent,
    MessageComponent,
    ModalComponent,
    NotificationComponent,
    PopconfirmComponent,
    ProgressComponent,
    SkeletonComponent,
    SpinComponent
  ],
  imports: [CommonModule, FormsModule, GeneralRoutingModule, NgZorroAntdModule]
})
export class GeneralModule {}
