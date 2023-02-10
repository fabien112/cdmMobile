import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsDevoirsParentPage } from './details-devoirs-parent.page';

const routes: Routes = [
  {
    path: '',
    component: DetailsDevoirsParentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsDevoirsParentPageRoutingModule {}
