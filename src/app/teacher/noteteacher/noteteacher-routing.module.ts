import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoteteacherPage } from './noteteacher.page';

const routes: Routes = [
  {
    path: '',
    component: NoteteacherPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoteteacherPageRoutingModule {}
