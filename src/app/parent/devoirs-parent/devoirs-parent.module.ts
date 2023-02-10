import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DevoirsParentPageRoutingModule } from './devoirs-parent-routing.module';

import { DevoirsParentPage } from './devoirs-parent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DevoirsParentPageRoutingModule
  ],
  declarations: [DevoirsParentPage]
})
export class DevoirsParentPageModule {}
