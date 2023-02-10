import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmploiTempsParentPage } from './emploi-temps-parent.page';

const routes: Routes = [
  {
    path: '',
    component: EmploiTempsParentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmploiTempsParentPageRoutingModule {}
