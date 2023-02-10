import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsDevoirsParentPageRoutingModule } from './details-devoirs-parent-routing.module';

import { DetailsDevoirsParentPage } from './details-devoirs-parent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsDevoirsParentPageRoutingModule
  ],
  declarations: [DetailsDevoirsParentPage]
})
export class DetailsDevoirsParentPageModule {}
