import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsquizzParentPageRoutingModule } from './detailsquizz-parent-routing.module';

import { DetailsquizzParentPage } from './detailsquizz-parent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsquizzParentPageRoutingModule
  ],
  declarations: [DetailsquizzParentPage]
})
export class DetailsquizzParentPageModule {}
