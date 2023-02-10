import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuizzsPageRoutingModule } from './quizzs-routing.module';

import { QuizzsPage } from './quizzs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuizzsPageRoutingModule
  ],
  declarations: [QuizzsPage]
})
export class QuizzsPageModule {}
