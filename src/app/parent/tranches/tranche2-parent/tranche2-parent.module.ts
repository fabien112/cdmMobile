import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tranche2ParentPageRoutingModule } from './tranche2-parent-routing.module';

import { Tranche2ParentPage } from './tranche2-parent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tranche2ParentPageRoutingModule
  ],
  declarations: [Tranche2ParentPage]
})
export class Tranche2ParentPageModule {}
