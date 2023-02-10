import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CahiersPage } from './cahiers.page';

const routes: Routes = [
  {
    path: '',
    component: CahiersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CahiersPageRoutingModule {}
