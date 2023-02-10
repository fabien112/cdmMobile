import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tranche1ParentPage } from './tranche1-parent.page';

const routes: Routes = [
  {
    path: '',
    component: Tranche1ParentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tranche1ParentPageRoutingModule {}
