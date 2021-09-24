'use strict';
/*
El DOM és l'estructura d'objectes que genera el navegador quan es 
carrega un document i es pot alterar mitjançant Javascript per canviar
dinàmicament els continguts i aspecte de la pàgina.

DOM és una abreviatura de Document Objet Model. En català podríem traduir-ho
per Model d'Objecte de Document, encara que ens hem referit al DOM habitualment
amb el nom de jerarquia d'objectes del navegador, perquè realment és una 
estructura jeràrquica on existeixen diversos objectes i uns depenen dels altres.

Els objectes del DOM modelitzen tant la finestra del navegador com l'historial, 
el document o pàgina web, i tots els elements que pugui tenir dins la pròpia pàgina,
com paràgrafs, divisions, taules, formularis i els seus camps, etc. 

Mitjançant el DOM es pot accedir, per mitjà de Javascript, a qualsevol d'aquests
elements, és a dir als seus corresponents objectes per alterar les seves propietats
o invocar els seus mètodes. Amb tot, a través del DOM, queda disponible per als 
programadors de Javascript, qualsevol element de la pàgina, per modificar-los, 
suprimir-los, crear nous elements i situar-los a la pàgina, etc.

El DOM està definit i administrat pel W3C, de manera que els diferents navegadors
simplement apliquen les especificacions del World Wide Web Consortium, 
per donar suport al DOM en les seves aplicacions. El DOM no només permet modificar 
pàgines web en HTML, sinó també documents XML.

Al llarg de la història dels navegadors, s'han anat aplicant en més o menys manera
les característiques del DOM. A mesura que se succeïen versions dels navegadors
també s'anava donant un major suport a les especificacions del DOM,
en el que s'han anomenat els nivells del DOM. El primer que va començar
a disponibilitzar per mitjà d'objectes dels components de la pàgina va ser Netscape 2.0,
que incorporava el que s'anomena el DOM nivell 0. Actualment, 
l'última especificació publicada és DOM nivell 4.

És important destacar ara que, atès que els nivells del DOM canvien de versió
a versió del navegador i que les especificacions s'han entès de manera diferent
per les diferents organitzacions creadores dels navegadors, s'ha produït un marc
on treballar amb els objectes de la pàgina difereix d'un navegador a un altre.
Això ho veiem en l'article DOM i compatibilitat amb els diferents navegadors.

Si volem obtenir altres textos introductoris al concepte de DOM de Javascript,
recomano la lectura de la Wikipedia sobre el DOM Document Object Model.

https://en.wikipedia.org/wiki/Document_Object_Model


*/

// https://en.wikipedia.org/wiki/Document_Object_Model


// aconseguir elements que tenen un ID concret

function canviaColor(unaCaixa,color){
    unaCaixa.style.background = color;
}

var caixa=document.getElementById("unacaixa");
//var caixa = document.querySelector("#unacaixa");

console.log(caixa);
console.log(caixa.innerHTML);

caixa.innerHTML = "Ara canviem el text";

caixa.style.background = "red";
caixa.style.color = "white";
caixa.style.padding = "20px";
caixa.className = "unNomdeClasse";

canviaColor(caixa, "blue");

// a la consola canviaColor(caixa,"yellow");

//seleccionar i modificar elements d'HTML

// Aconseguir elements segons l'etiqueta

var totsElsDivs = document.getElementsByTagName('div');
console.log(totsElsDivs);

console.log(totsElsDivs[2].textContent);
var div2 = totsElsDivs[2];
div2.innerHTML = "--->Canviem el text de DIV2";


var seccio = document.querySelector("#lamevaseccio");
var hr = document.createElement("hr");


for(var valor in totsElsDivs){
    var paragraf = document.createElement("p");
    var text = document.createTextNode(totsElsDivs[valor].textContent);

    console.log(totsElsDivs[valor]);

    if (typeof totsElsDivs[valor].textContent == 'string') {
        paragraf.appendChild(text);
        seccio.append(paragraf);
        document.querySelector("#lamevaseccio").prepend(paragraf);
    }
   
};

seccio.append(hr);

// selecció d'una classe


var divsVermells = document.getElementsByClassName('vermell');
console.log(divsVermells);
var div;
for (div in divsVermells) {
    if (divsVermells[div].className == 'vermell') {

        divsVermells[div].style.background = "red";

    }
}

var divsGrocs = document.getElementsByClassName('groc');
console.log(divsGrocs);


// Query selector troba el primer,
// per tant és més acosellable utilitzar-lo 
// amb identificadors, que són únics

var classeVermell =document.querySelector("div.vermell");
console.log(classeVermell);

/* El métode querySelectorAll() de un Element 
retorns una NodeList estática que representa una 
llista de elementos del documento que coincideixen 
amb el grup de selectors indicats 

elementList = parentNode.querySelectorAll(selectors);

*/
var classeVermell =document.querySelectorAll("div.vermell");
console.log(classeVermell);













// Aconseguir elements segons la classe










