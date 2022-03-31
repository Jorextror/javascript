import { AbstractType, Component, OnInit } from '@angular/core';

import { Global } from 'src/app/services/global';

import { ProjectService } from 'src/app/services/project.service';

import { Injectable } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})

@Injectable()
export class ProjectsComponent implements OnInit {

  public url:any;
  public projects:any;

  constructor(
    private _projecteService:ProjectService
  ) {
    this.url=Global.url
  }
  ngOnInit(): void {
    this._projecteService.getProjects()//del backend
    .subscribe(projects=>{
      this.projects=Object.values(projects)[0]; //obtenemos 3 arrays pero solo queremos la primera con les dades del proyecto
      console.log(this.projects.image)
    },
    error=>{
      console.log(error)
    })
  }

}
