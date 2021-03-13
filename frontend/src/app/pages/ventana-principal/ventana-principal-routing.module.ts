import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VentanaPrincipalPage } from './ventana-principal.page';

const routes: Routes = [
  {
    path: '',
    component: VentanaPrincipalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VentanaPrincipalPageRoutingModule {}
