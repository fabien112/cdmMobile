import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotetrimestrePageRoutingModule } from './notetrimestre-routing.module';

import { NotetrimestrePage } from './notetrimestre.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotetrimestrePageRoutingModule
  ],
  declarations: [NotetrimestrePage]
})
export class NotetrimestrePageModule {}
