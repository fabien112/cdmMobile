import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashbordParentPageRoutingModule } from './dashbord-parent-routing.module';

import { DashbordParentPage } from './dashbord-parent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashbordParentPageRoutingModule
  ],
  declarations: [DashbordParentPage]
})
export class DashbordParentPageModule {}
