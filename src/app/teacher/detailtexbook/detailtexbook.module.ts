import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailtexbookPageRoutingModule } from './detailtexbook-routing.module';

import { DetailtexbookPage } from './detailtexbook.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailtexbookPageRoutingModule
  ],
  declarations: [DetailtexbookPage]
})
export class DetailtexbookPageModule {}
