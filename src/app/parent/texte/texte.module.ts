import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TextePageRoutingModule } from './texte-routing.module';

import { TextePage } from './texte.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TextePageRoutingModule
  ],
  declarations: [TextePage]
})
export class TextePageModule {}
