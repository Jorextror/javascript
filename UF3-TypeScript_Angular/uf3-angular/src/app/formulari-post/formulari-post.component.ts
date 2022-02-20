import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PeticionsId } from '../services/peticionId.service';
import { Formulari } from '../models/form';

@Component({
  selector: 'app-formulari-post',
  templateUrl: './formulari-post.component.html',
  styleUrls: ['./formulari-post.component.css']
})
export class FormulariPostComponent implements OnInit {
  public id: number;
  public paisOk: boolean=true;
  public userId: number;
  public title : String;
  public body: String;
  public formulari: Formulari;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _peticionsService: PeticionsId
  ){
    this.id=0;
    this.userId=0;
    this.title = '';
    this.body = '';
    this.formulari = new Formulari(0,0,'','');
   }

   carregar(){
    this._peticionsService.getIdInput(this.id).subscribe(
      result => {
        this.paisOk=true;
        console.log(result[0]);

        this.userId = result[0].userId;
        this.id = result[0].id;
        this.title = result[0].title;
        this.body = result[0].body;
      },
      error => {
       console.log(<any>error);
       this.paisOk=false;
     }
    );
  }

  ngOnInit(){
    this._peticionsService.getId().subscribe(
      result => {
        console.log(result[0]);

        this.userId = result[0].userId;
        this.id = result[0].id;
        this.title = result[0].title;
        this.body = result[0].body;
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  onSubmit(){
    console.log(this.formulari);
  }
}