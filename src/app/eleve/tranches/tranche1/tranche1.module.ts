import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tranche1PageRoutingModule } from './tranche1-routing.module';

import { Tranche1Page } from './tranche1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tranche1PageRoutingModule
  ],
  declarations: [Tranche1Page]
})
export class Tranche1PageModule {}
