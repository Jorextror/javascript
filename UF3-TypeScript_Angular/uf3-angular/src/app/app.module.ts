import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { CotxeComponent } from './cotxe/cotxe.component';
import { HomeComponent } from './home/home.component';
import { Modul6Component } from './modul6/modul6.component';
import { Exemple02Component } from './exemple02/exemple02.component';
import { UnitatsFormativesComponent } from './unitats-formatives/unitats-formatives.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    CotxeComponent,
    HomeComponent,
    Modul6Component,
    Exemple02Component,
    UnitatsFormativesComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
