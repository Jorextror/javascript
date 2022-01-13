let cadena: string = "Aprenent TypeScript";

console.log(cadena);
// cadena = 10;
console.log(cadena);

let edat: number=10;
let cert: boolean=true;

//cert=0;

let qualsevol:any = 25;
qualsevol =" Hola ";

//arrays

var llenguatges: Array <string> = ['PHP','js','ts','python'];
let years: number [] = [10,20,30];
let barrejat:any [] = ['hola',20];

// 2 tipus vàlids

let cadena2: string | number = "Aprenent TypeScript";
cadena2 = 10;
//cadena2 = cert;

// tipus de dades personalitzats

type lletresonumeros = string|number;

let cadena3: lletresonumeros = "Aprenent TypeScript";

// var GLOBAL i let BLOC repàs

// anem a veure com és el js

var n1:number=10;
var n2:number=20;

if (cert) {
    let n1: number = 1;
    var n2: number = 2;
    console.log(n1,n2);
}
console.log(n1,n2);









