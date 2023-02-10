import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddnoteOnePageRoutingModule } from './addnote-one-routing.module';

import { AddnoteOnePage } from './addnote-one.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddnoteOnePageRoutingModule
  ],
  declarations: [AddnoteOnePage]
})
export class AddnoteOnePageModule {}
