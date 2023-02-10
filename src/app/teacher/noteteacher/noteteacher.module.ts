import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoteteacherPageRoutingModule } from './noteteacher-routing.module';

import { NoteteacherPage } from './noteteacher.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoteteacherPageRoutingModule
  ],
  declarations: [NoteteacherPage]
})
export class NoteteacherPageModule {}
