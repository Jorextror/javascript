'use strict';
/*

Browser Object Model
https://www.w3schools.com/js/js_window.asp

*/
// file:///home/pilarmote/Escriptori/lacetania-2019-2020/mp6/UF1/JAVASCRIPT/CURS-JAVASCRIPT/EXEMPLES-JS/bom.html

// si canviem la mida de la finestra canvia

//mida  de la finestra
var w = window.innerWidth;
var h = window.innerHeight;
console.log(w);
console.log(h);

//mida de la pantalla
var sw = screen.width;
var sh = screen.height;
console.log(sw);
console.log(sh);


// també podem treure la URL
console.log(window.location);
console.log(window.location['href']);
console.log(window.location.href);

function redirect(url) {

    window.location.href = url;
}

// a la consola redirect("http://google.cat");

function obrirFinestra(url) {
    window.open(url,"","width=600,height=400");
}

// a la consola obrirFinestra("http://google.cat");





//console.log(window.innerWidth);










// Aconseguir elements segons la classe










