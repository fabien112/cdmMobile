import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsyllabusPage } from './detailsyllabus.page';

const routes: Routes = [
  {
    path: '',
    component: DetailsyllabusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsyllabusPageRoutingModule {}
