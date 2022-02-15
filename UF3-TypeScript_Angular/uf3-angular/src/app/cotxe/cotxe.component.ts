import { Component, OnInit } from '@angular/core';
import { Cotxe } from '../models/cotxe';
import { CotxeService } from '../services/cotxe.service'; //service

import { Router, ActivatedRoute, Params } from '@angular/router';
// import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-cotxe',
  templateUrl: './cotxe.component.html',
  styleUrls: ['./cotxe.component.css'],
  providers: [CotxeService] //service
})
export class CotxeComponent implements OnInit {
  public cotxes: Array<Cotxe>;
  public model: string='';
  public marca: string='';
  public color: string='';
  public velocitat: number=0;
  public combustible: string='';

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _cotxeService: CotxeService  //service
  ) {
    this.cotxes=[
      new Cotxe('audi','4A','negre',120, "electric"),
      new Cotxe('escarabajo','escarabajo','groc',80, "gas"),
      new Cotxe('audi','A6','blanc',120, "hybrid"),
      new Cotxe('rapt','rapt','rojo',200, "diesel")
    ]
   }
   ngOnInit() {
    this.cotxes = this._cotxeService.getCotxes();//service

    this._route.queryParams.subscribe((params: Params) => {
      console.log(params);
      this.model=params['model'];
      this.marca=params['marca'];
      this.color=params['color'];
      this.velocitat=params['velocitat'];
      this.combustible=params['combustible'];
    // Activitat Angular 3
    //   var unCotxe = new Cotxe(this.model, this.marca, this.color, this.velocitat, this.combustible);
    //   this.cotxes.push(unCotxe);
    });
  }
  // ---- 7 -----
  afegirCotxe(){
    var unCotxe = new Cotxe(this.model, this.marca, this.color, this.velocitat, this.combustible)
    this.cotxes.push(unCotxe)
  }
  // ---- 8 -----
  eliminarCotxe(Emodel :String, Emarca: String){
    for (let i = 0; i < this.cotxes.length; i++) {
      if(this.cotxes[i].model==Emodel && this.cotxes[i].marca==Emarca){
        delete this.cotxes[i]
      }
      
    }
  }
  // ---- 9 ----
  // verifica si el boolea correComUnLlamp esta corecta per la velocitat del cotxe
  // correComUnLlamp(){
  //   for (let i = 0; i < this.cotxes.length; i++) {
  //       this.cotxes[i].color= this.cotxes[i].velocitat > 150)
        // splice(posicio, 0 = inserta 1 = remplaza, valor)
        // me esta detectando el splice como si fuera un atributo de Cotxe pero no es mi intencion
    // }
  // }
}
