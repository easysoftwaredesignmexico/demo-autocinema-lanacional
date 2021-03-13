import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisQrPageRoutingModule } from './mis-qr-routing.module';

import { MisQrPage } from './mis-qr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisQrPageRoutingModule
  ],
  declarations: [MisQrPage]
})
export class MisQrPageModule {}
