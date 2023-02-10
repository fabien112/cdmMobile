import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsquizzPageRoutingModule } from './detailsquizz-routing.module';

import { DetailsquizzPage } from './detailsquizz.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsquizzPageRoutingModule
  ],
  declarations: [DetailsquizzPage]
})
export class DetailsquizzPageModule {}
