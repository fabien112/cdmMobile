import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MessageParentDetailsPage } from './message-parent-details.page';

const routes: Routes = [
  {
    path: '',
    component: MessageParentDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MessageParentDetailsPageRoutingModule {}
