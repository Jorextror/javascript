import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
// npm install --save rxjs-compat
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class PeticionsService{
    public url:string;
    constructor(
        private _http: HttpClient
    ){
        this.url = "https://restcountries.com/v3.1/name";
    }
    getPais(): Observable<any>{
        return this._http.get(this.url+'/españa');
    }
    getPaisInput(paisId:any): Observable<any>{
        return this._http.get(this.url+'/'+paisId);
    }
}