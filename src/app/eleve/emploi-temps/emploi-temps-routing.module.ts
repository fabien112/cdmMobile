import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmploiTempsPage } from './emploi-temps.page';

const routes: Routes = [
  {
    path: '',
    component: EmploiTempsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmploiTempsPageRoutingModule {}
