import { Component, OnInit } from '@angular/core';
import { PeticionsService } from '../services/peticions.service';

@Component({
  selector: 'app-extern',
  templateUrl: './extern.component.html',
  styleUrls: ['./extern.component.css']
})
export class ExternComponent implements OnInit {
public paisId:number;
public pais: String;
public capital: String;
public area: String;
public flags: String;
public population : String;
public languages: String;
public paisOk: boolean=true;

  constructor( 
    private _peticionsService: PeticionsService
  ){ 
    this.paisId= 1;
    this.pais='';
    this.capital = '';
    this.area = '';
    this.flags = '';
    this.population = '';
    this.languages = '';
   }

   carregarPaisos(){
     this._peticionsService.getPaisInput(this.paisId).subscribe(
       result => {
        this.paisOk=true;
        console.log(result[0]);
         this.pais = result

         this.pais = result[0].name.common;
         this.capital = result[0].capital;
         this.area = result[0].area;
         this.flags = result[0].flags;
         this.population = result[0].population;
         this.languages = result[0].languages;
         // en cada pais va cambiando de nombre, para obtener la bandera i l'idioma necesitamos mas detalle
         for (let exten in this.flags) {
           this.flags=result[0].flags[exten];
         }
         for (let exten in result[0].languages) {
           this.languages=result[0].languages[exten];
         }
 
       },
       error => {
        console.log(<any>error);
        this.paisOk=false;
      }
     );
   }

  ngOnInit(){
    this._peticionsService.getPais().subscribe(
      result => {
        console.log(result[0]);
        
        this.pais = result[0].name.common;
        this.capital = result[0].capital;
        this.area = result[0].area;
        this.flags = result[0].flags;
        this.population = result[0].population;
        this.languages = result[0].languages;

        // en cada pais va cambiando de nombre, para obtener la bandera i l'idioma necesitamos mas detalle
        for (let exten in this.flags) {
          this.flags=result[0].flags[exten];
        }
        for (let exten in result[0].languages) {
          this.languages=result[0].languages[exten];
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }
}