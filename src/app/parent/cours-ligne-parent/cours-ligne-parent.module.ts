import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoursLigneParentPageRoutingModule } from './cours-ligne-parent-routing.module';

import { CoursLigneParentPage } from './cours-ligne-parent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoursLigneParentPageRoutingModule
  ],
  declarations: [CoursLigneParentPage]
})
export class CoursLigneParentPageModule {}
