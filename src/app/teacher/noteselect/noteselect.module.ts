import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoteselectPageRoutingModule } from './noteselect-routing.module';

import { NoteselectPage } from './noteselect.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoteselectPageRoutingModule
  ],
  declarations: [NoteselectPage]
})
export class NoteselectPageModule {}
