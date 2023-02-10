import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuizzParentPageRoutingModule } from './quizz-parent-routing.module';

import { QuizzParentPage } from './quizz-parent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuizzParentPageRoutingModule
  ],
  declarations: [QuizzParentPage]
})
export class QuizzParentPageModule {}
