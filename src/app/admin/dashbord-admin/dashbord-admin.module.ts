import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashbordAdminPageRoutingModule } from './dashbord-admin-routing.module';

import { DashbordAdminPage } from './dashbord-admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashbordAdminPageRoutingModule
  ],
  declarations: [DashbordAdminPage]
})
export class DashbordAdminPageModule {}
