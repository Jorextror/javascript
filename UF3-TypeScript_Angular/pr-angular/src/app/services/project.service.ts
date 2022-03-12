import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from '@angular/common/http';

import { Project } from "../models/project";
import { Global } from "./global";

@Injectable()
export class ProjectService{

    public url:string;
    constructor(
        private _http: HttpClient
    ) {
        this.url = Global.url;
    }

    saveProject(project:Project){
        let params = JSON.stringify(project);
        let headers =new HttpHeaders().set('Content-Type', 'application/json');

        console.log(this.url+'save-project');
        return this._http.post(this.url+'save-project', params, {headers: headers});
    }
    getProjects(){
        return this._http.get(this.url+'projects');
    }
}