import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TexbooksPage } from './texbooks.page';

const routes: Routes = [
  {
    path: '',
    component: TexbooksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TexbooksPageRoutingModule {}
