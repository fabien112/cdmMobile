import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClasselistPageRoutingModule } from './classelist-routing.module';

import {DetailsElevePageModule} from '../details-eleve/details-eleve.module';


import { ClasselistPage } from './classelist.page';

@NgModule({
  imports: [

      CommonModule,
      FormsModule,
      IonicModule,
      ClasselistPageRoutingModule,
      DetailsElevePageModule,
  ],
  declarations: [ClasselistPage]
})
export class ClasselistPageModule {}
