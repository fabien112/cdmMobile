import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmploiTempsParentPageRoutingModule } from './emploi-temps-parent-routing.module';

import { EmploiTempsParentPage } from './emploi-temps-parent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmploiTempsParentPageRoutingModule
  ],
  declarations: [EmploiTempsParentPage]
})
export class EmploiTempsParentPageModule {}
