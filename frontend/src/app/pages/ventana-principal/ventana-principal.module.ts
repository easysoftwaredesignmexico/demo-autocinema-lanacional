import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VentanaPrincipalPageRoutingModule } from './ventana-principal-routing.module';

import { VentanaPrincipalPage } from './ventana-principal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VentanaPrincipalPageRoutingModule
  ],
  declarations: [VentanaPrincipalPage]
})
export class VentanaPrincipalPageModule {}
