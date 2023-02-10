import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DevoirQuizzPage } from './devoir-quizz.page';

const routes: Routes = [
  {
    path: '',
    component: DevoirQuizzPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DevoirQuizzPageRoutingModule {}
