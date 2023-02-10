import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashbordParentPage } from './dashbord-parent.page';

const routes: Routes = [
  {
    path: '',
    component: DashbordParentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashbordParentPageRoutingModule {}
