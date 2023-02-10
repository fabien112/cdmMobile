import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmploiTempsPageRoutingModule } from './emploi-temps-routing.module';

import { EmploiTempsPage } from './emploi-temps.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmploiTempsPageRoutingModule
  ],
  declarations: [EmploiTempsPage]
})
export class EmploiTempsPageModule {}
