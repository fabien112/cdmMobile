import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashbordTeacherPage } from './dashbord-teacher.page';

const routes: Routes = [
  {
    path: '',
    component: DashbordTeacherPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashbordTeacherPageRoutingModule {}
