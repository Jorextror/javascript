/*Fes una funció en javaScript que li passem una frase i retorna la paraula més llarga de la frase.*/

let a="javaScript que li passem una frase i retorna";

function long(a) {
<<<<<<< HEAD
    ll=" ";
    a.split(" ");
    for (let i = 0; i < a.length; i++) {
        const element = paraula+i;
        console.log(i);
        if (ll.length < i.length) {
            ll=a;
=======
    let ll=" ";
    let paraules=a.split(" ");
    for (let i = 0; i < paraules.length; i++) {
        pos=paraules[i]
        if (ll.length < pos.length) {
            ll=pos;
>>>>>>> javascript/master
        }
    }
    console.log(ll);
}
long(a);
//no se dividen los spacios