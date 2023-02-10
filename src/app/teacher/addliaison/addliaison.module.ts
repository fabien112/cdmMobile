import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddliaisonPageRoutingModule } from './addliaison-routing.module';

import { AddliaisonPage } from './addliaison.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddliaisonPageRoutingModule
  ],
  declarations: [AddliaisonPage]
})
export class AddliaisonPageModule {}
