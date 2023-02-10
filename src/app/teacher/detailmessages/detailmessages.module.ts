import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailmessagesPageRoutingModule } from './detailmessages-routing.module';

import { DetailmessagesPage } from './detailmessages.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailmessagesPageRoutingModule
  ],
  declarations: [DetailmessagesPage]
})
export class DetailmessagesPageModule {}
