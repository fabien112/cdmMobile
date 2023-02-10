import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParentSelectPage } from './parent-select.page';

const routes: Routes = [
  {
    path: '',
    component: ParentSelectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParentSelectPageRoutingModule {}
