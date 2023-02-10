import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TexteDetailPageRoutingModule } from './texte-detail-routing.module';

import { TexteDetailPage } from './texte-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TexteDetailPageRoutingModule
  ],
  declarations: [TexteDetailPage]
})
export class TexteDetailPageModule {}
