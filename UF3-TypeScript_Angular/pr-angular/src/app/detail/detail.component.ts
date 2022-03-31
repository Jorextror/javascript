import { Component, OnInit } from '@angular/core';
import { Global } from '../services/global';

import { Router, Params, ActivatedRoute } from '@angular/router';

import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  public id: any;
  public project: any;
  public url:string;

  constructor(
    private _route: ActivatedRoute,
    private _project: ProjectService,
    private _router: Router
  ) {
    this.url = Global.url;
   }
  // obteniendo un proyecto por la id
  ngOnInit(): void {
    this._route.params.subscribe(params =>{
      this.id = params['id'];
      this._project.getProject(this.id).subscribe(project =>{
        this.project=project;
      })
      console.log(this.project);
    });
  }
  // llama el deleteProject del node para eliminarlo
  deleteProject(){
    this._project.deleteProject(this.id).subscribe(correcto=>{
      if (correcto) {
        this._router.navigate(['/projects'])
      }
    })
  }
}
