import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VentanaPrincipalPage } from './ventana-principal.page';

const routes: Routes = [
  {
    path: '',
    component: VentanaPrincipalPage
  },
  {
    path: 'dulceria',
    loadChildren: () => import('./dulceria/dulceria.module').then( m => m.DulceriaPageModule)
  },
  {
    path: 'combos',
    loadChildren: () => import('./combos/combos.module').then( m => m.CombosPageModule)
  },
  {
    path: 'tienda',
    loadChildren: () => import('./tienda/tienda.module').then( m => m.TiendaPageModule)
  },
  {
    path: 'mis-qr',
    loadChildren: () => import('./mis-qr/mis-qr.module').then( m => m.MisQrPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VentanaPrincipalPageRoutingModule {}
