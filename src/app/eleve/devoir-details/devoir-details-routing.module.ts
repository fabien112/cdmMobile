import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DevoirDetailsPage } from './devoir-details.page';

const routes: Routes = [
  {
    path: '',
    component: DevoirDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DevoirDetailsPageRoutingModule {}
