import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AbsenceParentPage } from './absence-parent.page';

const routes: Routes = [
  {
    path: '',
    component: AbsenceParentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AbsenceParentPageRoutingModule {}
