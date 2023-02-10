import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsyllabusPageRoutingModule } from './detailsyllabus-routing.module';

import { DetailsyllabusPage } from './detailsyllabus.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsyllabusPageRoutingModule
  ],
  declarations: [DetailsyllabusPage]
})
export class DetailsyllabusPageModule {}
