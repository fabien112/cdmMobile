import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParentSelectPageRoutingModule } from './parent-select-routing.module';

import { ParentSelectPage } from './parent-select.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParentSelectPageRoutingModule
  ],
  declarations: [ParentSelectPage]
})
export class ParentSelectPageModule {}
