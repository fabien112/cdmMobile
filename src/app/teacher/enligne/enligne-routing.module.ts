import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnlignePage } from './enligne.page';

const routes: Routes = [
  {
    path: '',
    component: EnlignePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnlignePageRoutingModule {}
