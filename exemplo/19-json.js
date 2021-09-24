'use strict';


// Javascript Object Notation

var estudi1 = {
    any: 2020,
    ensenyament: 'Cicles Formatius',
    etapa: 'Grau Superior',
    família: 'informàtica',
    cicle: 'DAW',
    curs: '2n',
    modul: 'MP6'
}
console.log("Objectes JSON");
console.log(estudi1);
console.log(estudi1.any);
console.log(estudi1.etapa);

console.log(`Any: ${estudi1.any}, enseyament: ${estudi1.ensenyament}`);


//canviem una prpopietat
estudi1.cicle = 'ASIX';
console.log("Canviem el valor d'una propietat")
console.log(estudi1.cicle);

// recorre totes les propietats d'un objecte:

const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}

// expected output:
// "a: 1"
// "b: 2"
// "c: 3"

var obj = {a: 1, b: 2, c: 3};
    
for (const prop in obj) {
  console.log(`obj.${prop} = ${obj[prop]}`);
}

var obj2 = {a: 1, b: 2, c: 3};
for (var i in obj2) {
  console.log(obj[i]);
}
// 1
// 2
// 3


// a la consola  estudis.curs

// s'assembla a un array associatiu
// es la mateixa notació de MongoDB

/* un valor JSON pot ser de tipus:
    * string entre ''
    * numero integer, float
    * objecte JSON
    * array [...]
    * Boolean true o false
    * null 
*/

// Podem fer una col·lecció d'objectes

var estudi2 = {
    any: '2020',
    ensenyament: 'Cicles Formatius',
    etapa: 'Grau Superior',
    família: 'informàtica',
    cicle: 'ASIX',
    curs: '1r',
    modul: 'MP3'
}
console.log("Una col·lecció d'estudis: ");
var estudis = [estudi1, estudi2];

console.log(estudi2);
console.log(estudis);

var caixaEstudis = document.querySelector("#estudis");
console.log(caixaEstudis);

// objectes i funcions

var printEstudi = function (estudi) {
    return `Any: ${estudi.any}, ensenyament ${estudi.ensenyament} i cicle ${estudi.cicle}`;
}

console.log("amb forEach");
estudis.forEach(estudi => {
    var p = document.createElement("p");
    p.append(printEstudi(estudi));
    caixaEstudis.append(p);

});

// podem retornar objectes

var objecteEstudi = function (estudi) {

    return {
        anyS: `L'Any és ${estudi.any}`,
        ensenyamentS: `L'ensenyament és ${estudi.ensenyament}`,
        cicleS: `El cicle  és ${estudi.cicle}`
    }

}
estudis.forEach(estudi=> {
    console.log(objecteEstudi(estudi));
    
});


// una plantilla per fer objectes

var elMeuCompte = function(){
    this.name= 'Maria Garcia ',
    this.despeses= 0,
    this.ingressos=0
}

elMeuCompte.prototype.afegeixDespesa= function(quantittat) {
    this.despeses += quantittat;
}


var unObjecteCompte = new elMeuCompte();


unObjecteCompte.afegeixDespesa(25);
console.log(elMeuCompte);
console.log(unObjecteCompte);

//dos noms -> 1 referència


// Mètodes propietats de l'objecte que el seu valor és una
// funció

let restaurant = {
    nom: 'El racó',
    capacitat: 75,
    guestCount: 0,
    checkCapacitat: function (partySize) {
        if (this.capacitat - this.guestCount >= partySize) {
            this.guestCount += partySize;
            return true;
        } else {
            return false;
        }

    }

}
console.log(restaurant);
console.log(restaurant.checkCapacitat(10));
console.log(restaurant);
console.log(restaurant.checkCapacitat(100));



