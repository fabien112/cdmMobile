import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoursLigneParentPage } from './cours-ligne-parent.page';

const routes: Routes = [
  {
    path: '',
    component: CoursLigneParentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursLigneParentPageRoutingModule {}
