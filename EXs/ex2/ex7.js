/*Fes una funció en javascript que retorni el nombre de vegades que un determinat 
caràcter apareix en un string.*/

string="una funció en javascript que retorni el nombre de vegades";

function vega(nombre, string) {
    lens=string.length
    =string.split(nombre).join("")
    stri=string.length
    console.log(string)
    console.log(lens)
    console.log(stri)
    return lens-stri

}

console.log(vega("e","pepepe"));

