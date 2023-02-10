import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CourlignePageRoutingModule } from './courligne-routing.module';

import { CourlignePage } from './courligne.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CourlignePageRoutingModule
  ],
  declarations: [CourlignePage]
})
export class CourlignePageModule {}
