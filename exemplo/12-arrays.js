'use strict';

// https://www.w3schools.com/js/js_arrays.asp

var cars = ["Saab", "Volvo", "BMW"];
console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);

console.log(cars);

// var array_name = [item1, item2, ...];      

var cars2 = [
    "Saab",
    "Volvo",
    "BMW"
  ];
console.log(cars2);

var cars3 = new Array("Saab", "Volvo", "BMW");
console.log(cars3);

var cotxe1 = cars[0];
var cotxe2 = cars[1];
var cotxe3 = cars[2];
console.log(cotxe1,cotxe2,cotxe3);

cars[0] = "Opel";
console.log(cars);

var person = ["John", "Doe", 46];
var person2 = {
    firstName:"John", 
    lastName:"Doe", 
    age:46
};
console.log(typeof(person));
console.log(typeof(person2));

var x = cars.length;
var y = cars.sort();
console.log(x);
console.log(y);


var fruits = ["Banana", "Orange", "Apple", "Mango"];
var flen=fruits.length;

var last = fruits[fruits.length - 1];

// recorrer un array

var text = "<ul>";
for (var i = 0; i < flen; i++) {
  text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";

document.write(text);

text = "<ul>";
fruits.forEach(myFunction);
text += "</ul>";

function myFunction(value) {
  text += "<li>" + value + "</li>";
}

document.write(text);
text = "";

document.write(fruits);

for (let aFruit in fruits) {
  text += "<li> --" + fruits[aFruit] + "</li>";
}

document.write(text,"<br/>");

text="";


var llenguatges = ["C", "C++", "Python", "Java", "JavaScript", "PHP"];

llenguatges.forEach((element,index,data) => {
 //debugger;
 text+="<li>"+"->"+index+"-"+element+"</li>";
});

document.write(text);


//arrays multiimensionals

