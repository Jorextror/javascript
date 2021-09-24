'use strict';

////// Arrays multidimensionals

var categories = ["Acció", "Terror", "Comedia"];
var pelis = ["Rambo", "The Hangover", "Schindler's List" ];

var cinema = [categories, pelis];

console.log(cinema[0][1]);
console.log(cinema[1][1]);
console.log(cinema[1][0]);

pelis.push("Batman");

// un exemple més llarg

var temperatures_mitjanes_ciutat0 = new Array(3) ;
temperatures_mitjanes_ciutat0[0] = 12 ;
temperatures_mitjanes_ciutat0[1] = 10 ;
temperatures_mitjanes_ciutat0[2] = 11 ;

var temperatures_mitjanes_ciutat1 = new Array (3) ;
temperatures_mitjanes_ciutat1[0] = 5 ;
temperatures_mitjanes_ciutat1[1] = 0 ;
temperatures_mitjanes_ciutat1[2] = 2 ;

var temperatures_mitjanes_ciutat2 = new Array (3) ;
temperatures_mitjanes_ciutat2[0] = 10 ;
temperatures_mitjanes_ciutat2[1] = 8 ;
temperatures_mitjanes_ciutat2[2] = 10 ;

var temperatures_ciutats = new Array (3) ;
temperatures_ciutats[0] = temperatures_mitjanes_ciutat0 ;
temperatures_ciutats[1] = temperatures_mitjanes_ciutat1 ;
temperatures_ciutats[2] = temperatures_mitjanes_ciutat2 ;

document.write("<table width=200 border=1 cellpadding=1 cellspacing=1>"); 
for (let i=0;i<temperatures_ciutats.length;i++){ 
   	document.write("<tr>") ;
   	document.write("<td><b>ciutat " + i + "</b></td>") ;
   	for (let j=0;j<temperatures_ciutats[i].length;j++){ 
      	document.write("<td>" + temperatures_ciutats[i][j] + "</td>") ;
   	} 
   	document.write("</tr>") ;
} 
document.write("</table>");






var unArray = [];
var num = 0;

// afegir i eliminar elements dels arrays

do {
  num = prompt ("Introdueix nums a l'array, per acabar introdueix qualsevolaltre símbol");
  num = parseInt(num);
  unArray.push(num);

} while(!isNaN(num));

unArray.pop();

console.log(unArray);
//unArray.splice(0,1);

//unArray.splice(0,3);

// Convertir array a string

var unArrayaString = unArray.join();

console.log(unArray);
console.log(unArrayaString);


// String a Array

var unStringaArray = unArrayaString.split(",");
console.log(unStringaArray);

//Ordenar Array

console.log(unArray.sort());
console.log(unArray.reverse());

console.log(unArray.sort((a, b) => a - b)); // For ascending sort

console.log(unArray.sort((a, b) => b - a)); // For descending sort










