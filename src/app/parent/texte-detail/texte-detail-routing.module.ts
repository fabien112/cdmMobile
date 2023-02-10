import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TexteDetailPage } from './texte-detail.page';

const routes: Routes = [
  {
    path: '',
    component: TexteDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TexteDetailPageRoutingModule {}
