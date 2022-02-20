import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProviders } from './app.routing';
// import { AppRoutingModule } from './app.routing';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { CotxeComponent } from './cotxe/cotxe.component';
import { HomeComponent } from './home/home.component';
import { Modul6Component } from './modul6/modul6.component';
import { Exemple02Component } from './exemple02/exemple02.component';
import { UnitatsFormativesComponent } from './unitats-formatives/unitats-formatives.component';
import { ExternComponent } from './extern/extern.component';
import { DescomptePipe } from './pipes/descompte.pipes';
import { FormulariPostComponent } from './formulari-post/formulari-post.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    CotxeComponent,
    HomeComponent,
    Modul6Component,
    Exemple02Component,
    UnitatsFormativesComponent,
    ExternComponent,
    DescomptePipe,
    FormulariPostComponent
    ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    // AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
