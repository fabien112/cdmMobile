import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentsallsPage } from './studentsalls.page';

const routes: Routes = [
  {
    path: '',
    component: StudentsallsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentsallsPageRoutingModule {}
