import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParentPage } from './parent.page';

const routes: Routes = [
  {
    path: '',
    component: ParentPage
  },
  {
    path: 'texte-detail',
    loadChildren: () => import('./texte-detail/texte-detail.module').then( m => m.TexteDetailPageModule)
  },
  {
    path: 'notetrimestre',
    loadChildren: () => import('./notetrimestre/notetrimestre.module').then( m => m.NotetrimestrePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParentPageRoutingModule {}
