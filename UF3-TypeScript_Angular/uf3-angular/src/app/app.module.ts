import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { Modul6 } from './modul6/modul6.component';
import { Modul6v2 } from './modul6v2/modul6v2.component';
import { Exemple02 } from './exemple02/exemple02.component';
import { UnitatsFormativesComponent } from './unitats-formatives/unitats-formatives.component';
import { WarningComponentComponent } from './warning-component/warning-component.component';
import { SuccessfulComponentComponent } from './successful-component/successful-component.component';

@NgModule({
  declarations: [
    AppComponent,
    Modul6,
    Modul6v2,
    Exemple02,
    UnitatsFormativesComponent,
    WarningComponentComponent,
    SuccessfulComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
