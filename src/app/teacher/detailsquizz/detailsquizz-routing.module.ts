import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsquizzPage } from './detailsquizz.page';

const routes: Routes = [
  {
    path: '',
    component: DetailsquizzPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsquizzPageRoutingModule {}
