/*Fes una funció en javaScript que li passem una frase i retorna la paraula més llarga de la frase.*/

let a="javaScript que li passem una frase i retorna";

function long(a) {
    let ll=" ";
    let paraules=a.split(" ");
    for (let i = 0; i < paraules.length; i++) {
        pos=paraules[i]
        if (ll.length < pos.length) {
            ll=pos;
        }
    }
    console.log(ll);
}
long(a);
//no se dividen los spacios