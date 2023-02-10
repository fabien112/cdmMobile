import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnlignePageRoutingModule } from './enligne-routing.module';

import { EnlignePage } from './enligne.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnlignePageRoutingModule
  ],
  declarations: [EnlignePage]
})
export class EnlignePageModule {}
