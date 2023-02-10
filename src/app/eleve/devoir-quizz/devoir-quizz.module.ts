import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DevoirQuizzPageRoutingModule } from './devoir-quizz-routing.module';

import { DevoirQuizzPage } from './devoir-quizz.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DevoirQuizzPageRoutingModule
  ],
  declarations: [DevoirQuizzPage]
})
export class DevoirQuizzPageModule {}
