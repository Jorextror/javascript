/*Fes una funció en javascript que retorni el nombre de vegades que un determinat 
caràcter apareix en un string.*/

string="una funció en javascript que retorni el nombre de vegades";

function vega(nombre, string) {
    lens=string.length
    paraules=string.split(nombre).join("")
    stri=paraules.length
    return lens-stri
}

console.log(vega("e","pepepe"));

