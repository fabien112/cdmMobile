import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsquizzParentPage } from './detailsquizz-parent.page';

const routes: Routes = [
  {
    path: '',
    component: DetailsquizzParentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsquizzParentPageRoutingModule {}
