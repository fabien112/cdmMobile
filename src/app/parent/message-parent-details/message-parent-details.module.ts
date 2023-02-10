import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MessageParentDetailsPageRoutingModule } from './message-parent-details-routing.module';

import { MessageParentDetailsPage } from './message-parent-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MessageParentDetailsPageRoutingModule
  ],
  declarations: [MessageParentDetailsPage]
})
export class MessageParentDetailsPageModule {}
