import { Component, OnInit } from '@angular/core';
import { listenerCount } from 'process';
import { Cotxe } from '../models/cotxe';

@Component({
  selector: 'app-cotxe',
  templateUrl: './cotxe.component.html',
  styleUrls: ['./cotxe.component.css']
})
export class CotxeComponent implements OnInit {
  public cotxe: Array<Cotxe>;

  constructor() {
    this.cotxe=[
      new Cotxe('audi','4A','negre',120, "electric",true),
      new Cotxe('escarabajo','escarabajo','groc',80, "gas",false),
      new Cotxe('audi','A6','blanc',120, "hybrid",true),
      new Cotxe('rapt','rapt','rojo',200, "diesel",false)
    ]
   }
  ngOnInit(): void {
  }
  // ---- 7 -----
  afegirCotxe(){
    var afegirCotxe = new Cotxe(this.model, this.marca, this.color, this.velocitat, this.combustible, this.correComUnLlamp)
    this.cotxe.push(afegirCotxe)
  }
  // ---- 8 -----
  eliminarCotxe(Emodel :String, Emarca: String){
    for (let i = 0; i < this.cotxe.length; i++) {
      if(this.cotxe[i].model==Emodel && this.cotxe[i].marca==Emarca){
        delete this.cotxe[i]
      }
      
    }
  }
  // ---- 9 ----
  // verifica si el boolea correComUnLlamp esta corecta per la velocitat del cotxe
  correComUnLlamp(){
    for (let i = 0; i < this.cotxe.length; i++) {
      if (this.cotxe[i].velocitat > 150){
        var remplace=this.cotxe[i]
        remplace.splice(5, 1, true);
        // splice(posicio, 0 = inserta 1 = remplaza, valor)
        // me esta detectando el splice como si fuera un atributo de Cotxe pero no es mi intencion
      }else{
        this.cotxe[i].splice(5, 1, false);
      }
    }
  }
}
