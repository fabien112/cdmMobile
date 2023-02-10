import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FraisParentPage } from './frais-parent.page';

const routes: Routes = [
  {
    path: '',
    component: FraisParentPage,
      children:[
          {
              path:'tranche1-parent',
              children:[
                  {
                      path: '',
                      loadChildren: () => import('../../parent/tranches/tranche1-parent/tranche1-parent.module').then( m => m.Tranche1ParentPageModule)
                  },
              ]
          },

          {
              path:'tranche2-parent',
              children:[
                  {
                      path: '',
                      loadChildren: () => import('../../parent/tranches/tranche2-parent/tranche2-parent.module').then( m => m.Tranche2ParentPageModule)
                  },
              ]
          },

          {
              path: '',
              redirectTo: 'menu/fraisParent/tranche1-parent',
              pathMatch: 'full'
          }


      ],
  }

  ,
    {
        path: '',
        redirectTo: 'menu/fraisParent/tranche1Parent',
        pathMatch: 'full'
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FraisParentPageRoutingModule {}
