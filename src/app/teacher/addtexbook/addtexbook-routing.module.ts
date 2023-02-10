import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddtexbookPage } from './addtexbook.page';

const routes: Routes = [
  {
    path: '',
    component: AddtexbookPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddtexbookPageRoutingModule {}
