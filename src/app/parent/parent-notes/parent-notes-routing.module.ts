import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParentNotesPage } from './parent-notes.page';

const routes: Routes = [
  {
    path: '',
    component: ParentNotesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParentNotesPageRoutingModule {}
