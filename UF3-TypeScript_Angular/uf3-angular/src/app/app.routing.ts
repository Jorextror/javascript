import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { Modul6Component } from './modul6/modul6.component'
import { Exemple02Component } from "./exemple02/exemple02.component";
import { CotxeComponent } from "./cotxe/cotxe.component";
import { UnitatsFormativesComponent } from "./unitats-formatives/unitats-formatives.component";
import { HomeComponent } from "./home/home.component";

const appRoutes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'modul6', component: Modul6Component},
    {path: 'exemple02', component: Exemple02Component},
    {path: 'cotxe', component: CotxeComponent},
    {path: 'cotxe/:model/:marca/:color/:velocitat/:combustible', component: CotxeComponent},
    {path: 'unitats-formatives', component: UnitatsFormativesComponent},
    {path: '**', component: HomeComponent}
]

export const appRoutingProviders: any[]=[];
export const routing:ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);