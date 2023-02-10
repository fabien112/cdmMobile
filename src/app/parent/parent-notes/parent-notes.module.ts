import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParentNotesPageRoutingModule } from './parent-notes-routing.module';

import { ParentNotesPage } from './parent-notes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParentNotesPageRoutingModule
  ],
  declarations: [ParentNotesPage]
})
export class ParentNotesPageModule {}
