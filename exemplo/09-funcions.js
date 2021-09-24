'use strict';

// Funcions

// Sintaxi

//function name(parameter1, parameter2, parameter3) {
// code to be executed
//}
console.log("Funcions");


function myFunction(p1, p2) {
    return p1 * p2; // The function returns the product of p1 and p2
}
var x = myFunction(4, 3); // Function is called, return value will end up in x
var y = myFunction(5, 8);

console.log(x, y);

function toCelsius(fahrenheit) {
    return (5 / 9) * (fahrenheit - 32);
}

console.log(toCelsius(77));

var xx = toCelsius(77);
var text = "The temperature is " + xx + " Celsius";

var text = "The temperature is " + toCelsius(77) + " Celsius";


// code here can NOT use carName

function anotherFunction() {
    var carName = "Volvo";
    // code here CAN use carName
}

// code here can NOT use carName

function square(number) {
    return number * number;
}
console.log(square(5));

function multiplicaOSuma(p1, p2, opcional = false) {
    var resultat;
    if (opcional) {
        resultat = p1 * p2;
    } else {
        resultat = p1 + p2;
    }
    return resultat; // The function returns the product of p1 and p2
}
var res = multiplicaOSuma(4, 3); // Function is called, return value will end up in x
console.log(res);
res = multiplicaOSuma(4, 3, true);
console.log(res);

//// paràmetres REST SPREAD

function llistatAlumnes(alumne1, alumne2, ...resta_dalumnes) {
    // em fa un array amb la resta de paràmetres que li passem

    console.log("Alumne 1:", alumne1);
    console.log("Alumne 2:", alumne2);
    console.log(resta_dalumnes);

}

llistatAlumnes("Joan", "Jordi", "Josep", "Joel", "John", "Jan", "Jeroni");

var llista = ["Joan", "Jordi", "Josep", "Joel", "John", "Jan", "Jeroni"];
llistatAlumnes(...llista);

//  funcions anònimes o com expressions
//  una funció que no té nom
// sempre retorna un valor


var peli = function(nom) {
    return "Titol de la pelicula : " + nom;
}
peli("Rambo V");

console.log(peli("Rambo V"));

var whatDoYouDo = function(job, firstName) {

    switch (job) {
        case 'teacher':
            return firstName + ' Teaches to code';
        case 'driver':
            return firstName + ' drives a cab in NY';
        case 'designer':
            return firstName + 'designs beautiful websites';
        default:
            return firstName + ' does something';
    }

}

console.log(whatDoYouDo('teacher', 'Pilar'));
console.log(whatDoYouDo('driver', 'Eva'));
console.log(whatDoYouDo('retired', 'Marc'));



// Funcions que reben una funció com a paràmetre
// callback


function sumam(num1, num2, sumaiMostra, sumaperDos) {
    var sumar = num1 + num2;

    sumaiMostra(sumar);
    sumaperDos(sumar);

    return sumar;
}

function siMCatala(dada) {
    console.log('El resultat és :' + dada);
}

function sp2Catala(dada) {
    console.log('El resultat * 2 és :' + dada * 2);
}

sumam(10, 20, siMCatala, sp2Catala);

function siMCastella(dada) {
    console.log('El resultado es :' + dada);
}

function sp2Castella(dada) {
    console.log('El resultado * 2 es :' + dada * 2);
}

sumam(10, 20, siMCastella, sp2Castella);

sumam(5, 7, function(dada) {

        console.log("La suma es:", dada);
    },
    function(dada) {

        console.log("la suma per 2 es:", (dada * 2));
    });

sumam(5, 7, function(dada) {

        console.log("----->:", dada);
    },
    function(dada) {

        console.log("x 4--->", (dada * 4));
    });





// funcions de fletxa

sumam(5, 4, dada => {

        console.log("amb fletxa-->:", dada);
    },
    dada => {

        console.log("amb fletxa 4--->", (dada * 4));
    });

// àmbit de les variables

function HolaClasse(text) {
    console.log(text);
    console.log(text1);
    var unaLocal = "Hauria de petar";
}


var text1 = "Var GLOBAL ";
HolaClasse("Hola a tots");
//console.log(unaLocal);