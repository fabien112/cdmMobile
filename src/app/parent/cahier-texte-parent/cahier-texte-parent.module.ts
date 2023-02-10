import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CahierTexteParentPageRoutingModule } from './cahier-texte-parent-routing.module';

import { CahierTexteParentPage } from './cahier-texte-parent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CahierTexteParentPageRoutingModule
  ],
  declarations: [CahierTexteParentPage]
})
export class CahierTexteParentPageModule {}
