import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoteselectPage } from './noteselect.page';

const routes: Routes = [
  {
    path: '',
    component: NoteselectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoteselectPageRoutingModule {}
