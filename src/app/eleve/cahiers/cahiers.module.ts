import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CahiersPageRoutingModule } from './cahiers-routing.module';

import { CahiersPage } from './cahiers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CahiersPageRoutingModule
  ],
  declarations: [CahiersPage]
})
export class CahiersPageModule {}
