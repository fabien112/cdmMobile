import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsElevePageRoutingModule } from './details-eleve-routing.module';

import { DetailsElevePage } from './details-eleve.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsElevePageRoutingModule
  ],
  declarations: [DetailsElevePage]
})
export class DetailsElevePageModule {}
