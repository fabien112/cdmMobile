import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TextePage } from './texte.page';

const routes: Routes = [
  {
    path: '',
    component: TextePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TextePageRoutingModule {}
