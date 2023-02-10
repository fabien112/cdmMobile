import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuizzsPage } from './quizzs.page';

const routes: Routes = [
  {
    path: '',
    component: QuizzsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuizzsPageRoutingModule {}
