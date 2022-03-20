import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';

import { Global } from 'src/app/services/global'; 
import { UploadService } from 'src/app/services/upload.service';

import { Router, Params, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [ProjectService, UploadService]
})

export class EditComponent implements OnInit {
  public editado:string;
  public url:string;
  public project:any;
  public project_desat: any;
  public filesToUpload:any;
  public id:any;


  constructor(
    private _projecteService: ProjectService, private _uploadService: UploadService,
    private _route: ActivatedRoute,
    private _project: ProjectService
  ) {
    this.url=Global.url
    this.editado='';    
   }
   // obtenemos el projecto por la id desde el node
   ngOnInit(): void {
    this._route.params.subscribe(params =>{
      this.id = params['id'];
      this._project.getProject(this.id).subscribe(project =>{
        this.project=project;
      })
    });
  }
  fileChangeEvent(fileInput: any){
    // obtenemos un array de ficheros para hacer upload de mas de un fichero
    // pero para nosotros solo hacemos uno
    this.filesToUpload = <Array<File>>fileInput.target.files;
}
// lo mismo de create.component pero cambiando 'saveProject' por 'updateProject'
onSubmit(form:any){
  console.log(this.project);
  this._projecteService.updateProject(this.project, this.id).subscribe(
    response => {
      this.project_desat= response;
      if (this.project_desat.project._id !=""){
        console.log(this.project_desat);
        console.log(this.project_desat.project);
        this._uploadService.makeFileRequest(
          Global.url+'upload-image/'+this.project_desat.project._id,
          [],
          this.filesToUpload,
          'image'
        ).then((result:any)=>{
          console.log(result);
        });
        this.editado= "guardat correctament ";
        form.reset();
      }
    },
    error => {
      console.log(error);
    }
  );
}
}
