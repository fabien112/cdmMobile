import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddliaisonPage } from './addliaison.page';

const routes: Routes = [
  {
    path: '',
    component: AddliaisonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddliaisonPageRoutingModule {}
