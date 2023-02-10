import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AbsenceParentPageRoutingModule } from './absence-parent-routing.module';

import { AbsenceParentPage } from './absence-parent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AbsenceParentPageRoutingModule
  ],
  declarations: [AbsenceParentPage]
})
export class AbsenceParentPageModule {}
