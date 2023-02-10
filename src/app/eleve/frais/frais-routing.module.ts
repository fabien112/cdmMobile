import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FraisPage } from './frais.page';

const routes: Routes = [
  {
    path: '',
    component: FraisPage,
      children:[
          {
            path:'tranche1',
              children:[
                  {
                      path: '',
                      loadChildren: () => import('../../eleve/tranches/tranche1/tranche1.module').then( m => m.Tranche1PageModule)

                  }
              ]
          },

          {
              path:'tranche2',
              children:[
                  {
                      path: '',
                      loadChildren: () => import('../../eleve/tranches/tranche2/tranche2.module').then( m => m.Tranche2PageModule)

                  }
              ]
          },

          {
              path: '',
              redirectTo: 'menu/frais/tranche1',
              pathMatch: 'full'
          }


      ],


  },

    {
        path: '',
        redirectTo: 'menu/frais/tranche1',
        pathMatch: 'full'
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FraisPageRoutingModule {}
