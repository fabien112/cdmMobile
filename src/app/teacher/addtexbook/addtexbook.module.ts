import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddtexbookPageRoutingModule } from './addtexbook-routing.module';

import { AddtexbookPage } from './addtexbook.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddtexbookPageRoutingModule
  ],
  declarations: [AddtexbookPage]
})
export class AddtexbookPageModule {}
