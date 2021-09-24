'use strict';

var unArray = [];
var num = 0;

/*
do {
  num = prompt ("Introdueix nums a l'array, per acabar introdueix qualsevolaltre símbol");
  num = parseInt(num);
  unArray.push(num);

} while(!isNaN(num));
unArray.pop();
*/

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop();              // Removes the last element ("Mango") from fruits
console.log(fruits);
fruits = ["Banana", "Orange", "Apple", "Mango"];
var x = fruits.pop();      // the value of x is "Mango"
// fruits.push("Kiwi");       //  Adds a new element ("Kiwi") to fruits
x = fruits.push("Kiwi");   //  the value of x is 5
fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.shift();
x = fruits.shift();    // the value of x is "Banana"
fruits.unshift("Lemon");    // Adds a new element "Lemon" to fruits
x = fruits.unshift("Lemon");    // Returns 5
delete fruits[0];           // Changes the first element in fruits to undefined


// comprovem un array
unArray = [2,4,5,1,90,65,32];
console.log(Array.isArray(unArray));

// The first parameter (2) defines the position where new elements should be added (spliced in).
// The second parameter (0) defines how many elements should be removed.
// The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.
// The splice() method returns an array with the deleted items:

//unArray.splice(0,1);
//unArray.splice(0,3);

var myGirls = ["Cecilie", "Lone"];
var myBoys = ["Emil", "Tobias", "Linus"];
var myChildren = myGirls.concat(myBoys); // Concatenates (joins) myGirls and myBoys
console.log(myChildren);

var arr1 = ["Cecilie", "Lone"];
var arr2 = ["Emil", "Tobias", "Linus"];
var arr3 = ["Robin", "Morgan"];
myChildren = arr1.concat(arr2, arr3);   // Concatenates arr1 with arr2 and arr3
console.log(myChildren);

// This example slices out a part of an array starting from array element 1 ("Orange"):
fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1);
console.log("fruits:",fruits);
console.log("citrus:",citrus);

// Convertir array a string
var unArrayaString = unArray.join();
console.log(unArray);
console.log(unArrayaString);
console.log(fruits.toString());

document.write(unArray); //??

// String a Array

var unStringaArray = unArrayaString.split(",");
console.log(unStringaArray);

//Ordenar Array

console.log(unArray.sort());
console.log(unArray.reverse());

console.log(unArray.sort((a, b) => a - b)); // For ascending sort

console.log(unArray.sort((a, b) => b - a)); // For descending sort

//Cerca un element dins d'un array

var cerca = unArray.find(num => num == 32);
console.log("element:",cerca);

var cercaIndex = unArray.findIndex(num => num == 32);
console.log("Index:",cercaIndex);

var cercaCondicio = unArray.some(valor => valor > 32);
console.log(cercaIndex);


// Array Functions
// són mètodes que té qualsevol variable que sigui de tipus array, 
// i que permeten realitzar una operació amb tots els elements 
//d'aquest array per aconseguir un objectiu concret, depenent de l'mètode. 
// En general, a aquests mètodes se'ls passa per paràmetre una funció callback i uns paràmetres opcionals.



//  .forEach(cb, arg)	Realiza la operación definida en cb por cada elemento del array.
// retorna undefined
// el mètode foreach () no torna res i espera que se li passi per paràmetre 
// una function que s'executarà per cada element de l'array. 
// Aquesta funció, pot ser passada en qualsevol dels formats 
// que hem vist: com a funció tradicional o com a funció fletxa:


const arr = ["a", "b", "c", "d"];

// amb funcions pre expressió
const f = function () {
  console.log("Un element.");
};
arr.forEach(f);

// Con funciones anónimas
arr.forEach(function () {
  console.log("Un element.");
});

// Con funciones flecha
arr.forEach((e) => console.log(e));

// Si se li passa un primer paràmetre, aquest serà l'element de l'array.
// Si se li passa un segon paràmetre, aquest serà la posició a la matriu.
// Si se li passa un tercer paràmetre, aquest serà l'array en qüestió.


arr.forEach((e) => console.log(e)); //  'a' / 'b' / 'c' / 'd'
arr.forEach((e, i) => console.log(e, i)); //  'a' 0 / 'b' 1 / 'c' 2 / 'd' 3
arr.forEach((e, i, a) => console.log(e,i,a[i])); // ?


// comptar i acumular tots els elements d'un array amb forEach()

var c=0, a=0;

var valors=[1,2,3,4,5,6,7,8,9,10];

function mitjana (a) {
  let t=0;
  a.forEach(e=>{
    t+=e;
  });
  return t/a.length;

}
console.log("Mitjana:",mitjana(valors));

// rascat tot
function opArray(a, f) {
  
  let r=0;
  for (let i=0;i<a.length;i++) {
    r=f(r,i,a[i],a.length);
  }
    return r;
}

// mitjana
let r = opArray(valors,(ac,i,e,l)=>{ return (i+1==l)?(ac+=e)/l:ac+=e });
console.log("rM:",r);

// senars
r = opArray(valors,(ac,i,e)=>{ 
  return ((e%2==1)?ac+=1:ac); 
});
console.log("csenars:",r);

//més gran
r = opArray(valors,(ac,i,e)=>{ 
  if (i==0) return e;
  return (e>ac?e:ac);
});
console.log("mes gran",r);


// every

// El mètode every () permet comprovar si tots i cadascun 
// dels elements d'un array compleixen la condició que 
// s'especifiqui a la callback:

// const arr = ["a", "b", "c", "d"];
arr.every((e) => e.length == 1); // true

// some
// some (A el menys un)
// De la mateixa manera que el mètode anterior serveix per 
// comprovar si tots els elements de l'array compleixen 
// una determinada condició, amb some () podem comprovar 
// si al menys un dels elements de l'array, c
// ompleixen aquesta condició definida pel callback.

// const arr = ["a", "bb", "c", "d"];
arr.some((e) => e.length == 2); // true


// map (Transformacions)
// El mètode map () és un mètode molt potent i útil 
// per treballar amb arrays, ja que el seu objectiu 
// és tornar un nou array on cada un dels seus elements 
// serà el que retorni la funció callback per cada 
// un dels elements de l'array original:

const arrN = ["Ana", "Pablo", "Pedro", "Pancracio", "Heriberto"];
const nArrN = arr.map((e) => e.length);
console.log(nArrN); // [3, 5, 5, 9, 9]

// filter (Filtrat)
// El mètode filter () ens permet filtrar els elements 
// d'un array i retornar un nou array amb només 
// els elements que vulguem. Per a això, utilitzarem 
// la funció callback per establir una condició 
// que retorna true només en els elements que ens interessin:

//const arr = ["Ana", "Pablo", "Pedro", "Pancracio", "Heriberto"];
const nArrF = arr.filter((e) => e[0] == "P");

//  ['Pablo', 'Pedro', 'Pancracio']
// Tingues en compte que si cap element compleix
// la condició, filter () retorna un buit.

// En ECMAScript 6 s'introdueixen dos nous mètodes 
// dins de les Array functions: find () i findIndex (). 
// Tots dos s'utilitzen per buscar elements d'un array 
// mitjançant una condició, la diferència és que el primer 
// retorna l'element mentre que el segon torna la seva 
// posició en l'array original. Vegem com funcionen:

//const arr = ["Ana", "Pablo", "Pedro", "Pancracio", "Heriberto"];

arr.find((e) => e.length == 5); // 'Pablo'
arr.findIndex((e) => e.length == 5); // 1

// En el cas de no trobar cap element que compleixi la condició, 
// find () retornarà, mentre que findIndex (), 
// que ha de retornar un, tornarà -1.


// Finalment, ens trobem amb una parella de mètodes denominats 
// reduce () i reduceRight (). Tots dos mètodes s'encarreguen 
// de recórrer tots els elements de l'array, 
// i anar acumulant els seus valors 
// (o alguna operació diferent) i sumar tot, 
// per tornar el seu resultat final.

// En aquest parell de mètodes, trobarem una primera
//  diferència en la seva funció callback, 
// ja que en lloc de tenir els clàssics paràmetres 
// opcionals (i, i, a) que hem utilitzat fins ara, 
// té (p, i, i, a), on veiem que apareix 
// un primer paràmetre extra inicial: p.

// A la primera iteració, p conté el valor del primer element 
// de l'array i e de l'segon. 
// En següents iteracions, p és l'acumulador que conté 
// el que va retornar el callback en la iteració anterior, 
// mentre que e és el següent element de l'array, 
// i així successivament. Vegem un exemple per entendre-ho:

const arrNums = [95, 5, 25, 10, 25];
arrNums.reduce((p, e) => {
  console.log(`P=${p} e=${e}`);
  return p + e;
});

// P=95 e=5    
// P=100 e=25  
// P=125 e=10  
// P=135 e=25  

// Finalment, retorna 160