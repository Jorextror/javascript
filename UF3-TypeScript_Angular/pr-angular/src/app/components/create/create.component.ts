import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';

import { Global } from 'src/app/services/global'; 
import { UploadService } from 'src/app/services/upload.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [ProjectService, UploadService]
})
export class CreateComponent implements OnInit {

  public project: Project;
  public project_desat: any;
  public filesToUpload:any;
  public guardat = '';

  constructor(
    private _projectService: ProjectService,  private _uploadService: UploadService
  ) {
    this.project = new Project('','','','',2020,'','');

  }

  ngOnInit(): void {
  }

  fileChangeEvent(fileInput: any){
    console.log(fileInput);
    // obtenemos un array de ficheros para hacer upload de mas de un fichero
    // pero para nosotros solo hacemos uno
    this.filesToUpload = <Array<File>>fileInput.target.files;
}

  onSubmit(form:any){
    console.log(this.project);
    // del 'projectService' utilitza el metode saveProject para el objecto 'project' creado arriba
    this._projectService.saveProject(this.project).subscribe(
      response => {
        this.project_desat= response;// recogemos les dades
        // si no esta vacio la id es que el projecto a sido subido
        if (this.project_desat.project._id !=""){
          console.log(this.project_desat);
          console.log(this.project_desat.project._id);
          this._uploadService.makeFileRequest(
            Global.url+'upload-image/'+this.project_desat.project._id, //ruta de lbackend
            [],
            this.filesToUpload, // array de ficheros que subimos
            'image' // Nombre del campo que recive el campo en el modelo del backend "image" 
          ).then((result:any)=>{
            console.log(result);
          });
          this.guardat= "guardat correctament ";
          form.reset();
        }
      },
      error => {
        console.log(error);
      }
    );
  }
}