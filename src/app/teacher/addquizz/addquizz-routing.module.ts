import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddquizzPage } from './addquizz.page';

const routes: Routes = [
  {
    path: '',
    component: AddquizzPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddquizzPageRoutingModule {}
