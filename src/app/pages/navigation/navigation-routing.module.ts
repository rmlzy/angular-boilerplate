import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AffixComponent } from './affix/affix.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { MenuComponent } from './menu/menu.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { PaginationComponent } from './pagination/pagination.component';
import { StepsComponent } from './steps/steps.component';

const routes: Routes = [
  { path: 'affix', component: AffixComponent },
  { path: 'breadcrumb', component: BreadcrumbComponent },
  { path: 'dropdown', component: DropdownComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'page-header', component: PageHeaderComponent },
  { path: 'pagination', component: PaginationComponent },
  { path: 'steps', component: StepsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavigationRoutingModule {}
