import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddnoteOnePage } from './addnote-one.page';

const routes: Routes = [
  {
    path: '',
    component: AddnoteOnePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddnoteOnePageRoutingModule {}
