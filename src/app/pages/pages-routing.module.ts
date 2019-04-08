import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefaultComponent, BlankComponent } from '../theme/layouts';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      { path: '', component: DashboardComponent },
      {
        path: 'general',
        loadChildren: './general/general.module#GeneralModule'
      },
      {
        path: 'navigation',
        loadChildren: './navigation/navigation.module#NavigationModule'
      },
      {
        path: 'data-entry',
        loadChildren: './data-entry/data-entry.module#DataEntryModule'
      },
      {
        path: 'biz',
        loadChildren: './biz/biz.module#BizModule'
      }
    ]
  },
  {
    path: '',
    component: BlankComponent,
    children: [{ path: 'login', component: LoginComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
