import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButtonComponent } from './button/button.component';
import { IconComponent } from './icon/icon.component';
import { GridComponent } from './grid/grid.component';

const routes: Routes = [
  { path: 'button', component: ButtonComponent },
  { path: 'icon', component: IconComponent },
  { path: 'grid', component: GridComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneralRoutingModule {}
