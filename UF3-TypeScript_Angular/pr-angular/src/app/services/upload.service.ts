import { Injectable } from "@angular/core";
import { Global } from "./global";

@Injectable()
export class UploadService{
    public url: string;
    public filesToUpload: File[]=[];


    constructor(){
        this.url = Global.url;
    }

    makeFileRequest(url: string, params: Array<string>, files: Array <any>, name:string){
        return new Promise(function(resolve,reject){
            var formData:any=new FormData();
            var xhr=new XMLHttpRequest();

            for (var i=0; i<files.length; i++){
                formData.append(name, files[i], files[i].name);
            }

            xhr.onreadystatechange = function(){
                if (xhr.readyState == 4){
                    resolve(JSON.parse(xhr.response));
                }else{
                    reject(xhr.response);
                }
            }
            xhr.open('POST',url,true);
            xhr.send(formData);
        })
    }
}