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

  public title: string;
  public project: Project;
  public project_desat: any;
  public filesToUpload:any;
  guardat = '';

  constructor(
    private _projectService: ProjectService, private _uploadService: UploadService
  ) {
    this.title="Crear Project";
    this.project = new Project('','','','',2020,'','');

  }

  ngOnInit(): void {
  }
  fileChangeEvent(fileInput: any){
    this.filesToUpload = <Array<File>>fileInput.target.files;
}

  onSubmit(form:any){
    console.log(this.project);
    this.guardat= "guardat correctament ";//<a href='#'>aqui</a>
    this._projectService.saveProject(this.project).subscribe(
      response => {
        this.project_desat= response;
        if (this.project_desat.project._id !=""){
          console.log(this.project_desat);
          console.log(this.project_desat.project._id);
          this._uploadService.makeFileRequest(
            Global.url+'upload-image/'+this.project_desat.project._id,
            [],
            this.filesToUpload,
            'image'
          ).then((result:any)=>{
            console.log(result);
          });
          
          form.reset();
        }
      },
      error => {
        console.log(error);
      }
    );
  }
}