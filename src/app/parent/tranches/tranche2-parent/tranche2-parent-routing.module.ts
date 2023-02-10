import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tranche2ParentPage } from './tranche2-parent.page';

const routes: Routes = [
  {
    path: '',
    component: Tranche2ParentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tranche2ParentPageRoutingModule {}
