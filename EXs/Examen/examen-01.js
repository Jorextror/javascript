'use strict'
//1 array matriu
let PARAULES = ['JAVASCRIPT', 'PHP', 'PYTHON', 'JAVA', 'HTML', 'CSS', 'ANGULAR', 'VUE'];
let sopa =[];
let MIDA = 10;
let LLETRES="ABC";
let marcats=[];

function array() {
    for (let i = 0; i < MIDA; i++) {
        let arrays=[];
        for (let j = 0; j < MIDA; j++) {
            arrays.push(['-', 0])
        }
        sopa.push(arrays);
    }
}
//2 colocar paraule
function colocar(sopa, PARAULES) {
    function colocarComprovar(contingut,x,z) {
        console.log();
    }
    let paraul=false;
    while (!paraul) {
        let i = Math.random(0,9);
        let j = Math.random(0,9);
        if (colocarComprovar(PARAULES[0],i,j)){
            for (let k = 0; k < array.length; k++) {
                
                
            }
            PARAULES.splice(PARAULES[0], 1);
            paraul=true;
        }
    }
    console.log(contingut);
}


//3 taula
function taula(sopa) {
    let table = document.createElement("table"); // crea una taula
    table.setAttribute('id','taula'); // posa un id a la taula
    for (var i = 0; i < sopa.length; i++) {
        let tr = document.createElement('tr'); // crea una fila
        let filaC=sopa[i];
        for (let j = 0; j < MIDA; j++) {
            let td = document.createElement('td'); // crea una cel·la
            td.setAttribute("id",(i+""+j));//asignar ID
            let lletra = document.createTextNode(filaC[j][0]); //crea el text
            td.appendChild(lletra); // afegeix la lletra a la cel·la
            tr.appendChild(td); // afegeix la cel·la a la fila
            table.appendChild(tr); // afegeix la fila a la taula
            
            let tauler = document.getElementById("tauler");
            tauler.appendChild(table); // on tauler és el div amb (ara ja està al doc)
                
        }
        
    }
}
//----Programa principal-----

//1
array();
console.log(sopa);
//2
// colocar(sopa, PARAULES);
//3
taula(sopa);


//4 groc
var input = document.getElementsByTagName("td");
for (let i = 0; i < input.length; i++) {
    input[i].addEventListener("click",function(){
        input[i].className += (input[i].className ? " " : "")+"groc";
    });
}

//5 validar
// var valida = document.getElementById("valida");
// var groc = document.getElementsByClassName("groc");
// valida.addEventListener("click",function(){
//     for (let i = 0; i < sopa.length; i++) {
//         console.log();
//     }
// });