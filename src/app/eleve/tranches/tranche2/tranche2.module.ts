import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tranche2PageRoutingModule } from './tranche2-routing.module';

import { Tranche2Page } from './tranche2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tranche2PageRoutingModule
  ],
  declarations: [Tranche2Page]
})
export class Tranche2PageModule {}
