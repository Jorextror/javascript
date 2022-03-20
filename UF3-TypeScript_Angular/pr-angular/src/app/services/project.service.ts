import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from '@angular/common/http';

import { Project } from "../models/project";
import { Global } from "./global";

@Injectable({
    providedIn:'root'
})
export class ProjectService{

    public url:string;
    constructor(
        private _http: HttpClient
    ) {
        this.url = Global.url;
    }
    //para gurdar un nuevo proyecto a la base de dades con el node
    saveProject(project:Project){
        let params = JSON.stringify(project);
        let headers =new HttpHeaders().set('Content-Type', 'application/json');

        console.log(this.url+'save-project');
        return this._http.post(this.url+'save-project', params, {headers: headers});
    }
    // obtenemos todos los proyectos llamando al node
    getProjects(){
        return this._http.get(this.url+'projects/');
    }
    // con la 'id' extrayemos un proyecto
    getProject(id:string){
        return this._http.get(this.url+'project/'+id);
    }
    //eliminamos el proyecto con la 'id' llamando al node( delete-proyect/ ) que lo elimine
    deleteProject(id:string){
        return this._http.delete(this.url+'delete-project/'+id);
    }
    //para actualitxar pasamos el 'projecto' (lo nuevo que queremos actualitzar) con la 'id' que indica cual projecto 
    updateProject( project:Project, id:string){
        let params = JSON.stringify(project)
        let headers = new HttpHeaders().set('Content-Type','application/json')
        console.log(params)
        return this._http.put(this.url+'update-project/'+id, params, {headers: headers})
    }
}