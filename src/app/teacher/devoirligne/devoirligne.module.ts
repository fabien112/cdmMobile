import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DevoirlignePageRoutingModule } from './devoirligne-routing.module';

import { DevoirlignePage } from './devoirligne.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DevoirlignePageRoutingModule
  ],
  declarations: [DevoirlignePage]
})
export class DevoirlignePageModule {}
