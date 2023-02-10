import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailmessagesPage } from './detailmessages.page';

const routes: Routes = [
  {
    path: '',
    component: DetailmessagesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailmessagesPageRoutingModule {}
