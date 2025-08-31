import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashbordAdminPage } from './dashbord-admin.page';

const routes: Routes = [
  {
    path: '',
    component: DashbordAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashbordAdminPageRoutingModule {}
