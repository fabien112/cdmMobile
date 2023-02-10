import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashbordTeacherPageRoutingModule } from './dashbord-teacher-routing.module';

import { DashbordTeacherPage } from './dashbord-teacher.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashbordTeacherPageRoutingModule
  ],
  declarations: [DashbordTeacherPage]
})
export class DashbordTeacherPageModule {}
