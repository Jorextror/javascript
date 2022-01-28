import { Component, OnInit } from '@angular/core';
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
      new Cotxe('audi','4A','negre',120, "electric"),
      new Cotxe('escarabajo','escarabajo','groc',80, "gas"),
      new Cotxe('audi','A6','blanc',120, "hybrid"),
      new Cotxe('rapt','rapt','rojo',200, "diesel")
    ]
   }

  ngOnInit(): void {
  }

}
