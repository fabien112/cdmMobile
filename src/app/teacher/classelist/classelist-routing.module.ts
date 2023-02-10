import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClasselistPage } from './classelist.page';

const routes: Routes = [
  {
    path: '',
    component: ClasselistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClasselistPageRoutingModule {}
