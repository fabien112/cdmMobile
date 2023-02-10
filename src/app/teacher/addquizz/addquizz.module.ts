import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddquizzPageRoutingModule } from './addquizz-routing.module';

import { AddquizzPage } from './addquizz.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddquizzPageRoutingModule
  ],
  declarations: [AddquizzPage]
})
export class AddquizzPageModule {}
