/*Fes una funció en javaScript que li passem una frase i retorna la paraula més llarga de la frase.*/

let a="retorna la paraula més llarga";

function long(a) {
    ll=" ";
    a.split(" ");
    for (let i = 0; i < a; i++) {
        console.log(i);
        if (ll.length < i.length) {
            ll=a;
        }
        
    }
    console.log(a.length);
    console.log(ll);
}
long(a);
//no se dividen los spacios