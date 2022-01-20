import { Component } from '@angular/core';

@Component({
    selector: '.exemple02',
    templateUrl: './exemple02.component.html'
  })
  export class Exemple02 {
    public titol: string;
    public llistat: string;
    public subtitol: string;

    constructor(){
        this.titol = "Angular";
        this.llistat="Una lista";
        this.subtitol="versió 13"

        console.log("Component exemple02 carregan")
    }
}