import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
<<<<<<< Updated upstream
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
=======
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,CartModalPageModule, HttpClientModule],
>>>>>>> Stashed changes
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
