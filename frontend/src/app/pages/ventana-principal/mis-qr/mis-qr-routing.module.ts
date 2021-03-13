import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisQrPage } from './mis-qr.page';

const routes: Routes = [
  {
    path: '',
    component: MisQrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisQrPageRoutingModule {}
