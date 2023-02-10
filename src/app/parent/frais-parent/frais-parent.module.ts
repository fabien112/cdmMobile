import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FraisParentPageRoutingModule } from './frais-parent-routing.module';

import { FraisParentPage } from './frais-parent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FraisParentPageRoutingModule
  ],
  declarations: [FraisParentPage]
})
export class FraisParentPageModule {}
