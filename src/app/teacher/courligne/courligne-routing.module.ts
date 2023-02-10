import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourlignePage } from './courligne.page';

const routes: Routes = [
  {
    path: '',
    component: CourlignePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourlignePageRoutingModule {}
