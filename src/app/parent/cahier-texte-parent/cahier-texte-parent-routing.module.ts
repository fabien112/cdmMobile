import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CahierTexteParentPage } from './cahier-texte-parent.page';

const routes: Routes = [
  {
    path: '',
    component: CahierTexteParentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CahierTexteParentPageRoutingModule {}
