'use strict';

// Cadenes de text

var num = 444;
var text = "Un text";
var text2 = "Un altre text altre";

console.log('/////////////////////////////////////');
console.log('///////////cadenes de text //////////');
console.log('/////////////////////////////////////');

console.log(typeof(num));
console.log(typeof(num.toString()));

console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.length);


var unArray = ["Hola", "Adeu"];
console.log(unArray.length);

console.log(text + "-" + text2);
console.log(text.concat("-" + text2));

// var text2 = "Un altre text altre";
//              0123456789

var cerca = text2.indexOf("altre");
console.log(cerca);

cerca = text2.indexOf("cap");
console.log("indexOf Cap:", cerca);

cerca = text2.lastIndexOf("altre");
console.log("last index Of:", cerca);

cerca = text2.search("altre");
console.log('search:', cerca);

cerca = text2.match("altre");
console.log('match:', cerca);

cerca = text2.match(/altre/g);
console.log(cerca);

cerca = text2.substr(1, 6);
console.log('substr:', cerca);

cerca = text2.charAt(1);
console.log('charAt:', cerca);

cerca = text2.charAt(6);
console.log(cerca);

cerca = text2.startsWith("Un");
console.log('startsWith:', cerca);

cerca = text2.endsWith("altre");
console.log('endsWith:', cerca);

cerca = text2.includes("Altre");
console.log('includes:', cerca);

cerca = text2.replace("altre", "diferent");
console.log(cerca);
console.log(text2);

cerca = text2.split();
console.log(cerca);

cerca = text2.split(" ");
console.log(cerca);

text2 = "          Un altre text altre               ";
cerca = text2.trim();
console.log(cerca);