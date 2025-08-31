import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotetrimestrePage } from './notetrimestre.page';

const routes: Routes = [
  {
    path: '',
    component: NotetrimestrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotetrimestrePageRoutingModule {}
