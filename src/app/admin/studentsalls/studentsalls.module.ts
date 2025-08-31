import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentsallsPageRoutingModule } from './studentsalls-routing.module';

import { StudentsallsPage } from './studentsalls.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudentsallsPageRoutingModule
  ],
  declarations: [StudentsallsPage]
})
export class StudentsallsPageModule {}
