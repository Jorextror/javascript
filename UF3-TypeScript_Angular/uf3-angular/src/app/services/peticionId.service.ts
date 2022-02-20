import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
// npm install --save rxjs-compat
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class PeticionsId{
    public url:string;
    constructor(
        private _http: HttpClient
    ){
        this.url = "https://jsonplaceholder.typicode.com/posts";
    }
    getId(): Observable<any>{
        return this._http.get(this.url);
    }
    getIdInput(Id:any): Observable<any>{
        return this._http.get(this.url+'/'+Id);
    }
}