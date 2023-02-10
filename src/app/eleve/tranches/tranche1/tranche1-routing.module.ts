import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tranche1Page } from './tranche1.page';

const routes: Routes = [
  {
    path: '',
    component: Tranche1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tranche1PageRoutingModule {}
