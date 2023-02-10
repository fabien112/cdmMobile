import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DevoirsPageRoutingModule } from './devoirs-routing.module';

import { DevoirsPage } from './devoirs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DevoirsPageRoutingModule
  ],
  declarations: [DevoirsPage]
})
export class DevoirsPageModule {}
