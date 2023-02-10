import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TexbooksPageRoutingModule } from './texbooks-routing.module';

import { TexbooksPage } from './texbooks.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TexbooksPageRoutingModule
  ],
  declarations: [TexbooksPage]
})
export class TexbooksPageModule {}
