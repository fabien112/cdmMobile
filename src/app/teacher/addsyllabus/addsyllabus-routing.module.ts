import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddsyllabusPage } from './addsyllabus.page';

const routes: Routes = [
  {
    path: '',
    component: AddsyllabusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddsyllabusPageRoutingModule {}
