import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tranche1ParentPageRoutingModule } from './tranche1-parent-routing.module';

import { Tranche1ParentPage } from './tranche1-parent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tranche1ParentPageRoutingModule
  ],
  declarations: [Tranche1ParentPage]
})
export class Tranche1ParentPageModule {}
