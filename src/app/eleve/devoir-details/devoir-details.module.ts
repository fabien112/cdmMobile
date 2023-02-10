import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DevoirDetailsPageRoutingModule } from './devoir-details-routing.module';

import { DevoirDetailsPage } from './devoir-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DevoirDetailsPageRoutingModule
  ],
  declarations: [DevoirDetailsPage]
})
export class DevoirDetailsPageModule {}
