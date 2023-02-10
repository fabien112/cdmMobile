import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddsyllabusPageRoutingModule } from './addsyllabus-routing.module';

import { AddsyllabusPage } from './addsyllabus.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddsyllabusPageRoutingModule
  ],
  declarations: [AddsyllabusPage]
})
export class AddsyllabusPageModule {}
