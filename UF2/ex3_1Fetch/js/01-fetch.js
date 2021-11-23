'use strict';
<<<<<<< HEAD:UF2/ex3_1Fetch/js/01-fetch.js
// Fetch
// jsonplaceholder
// https://jsonplaceholder.typicode.com/
/* Un place holder és un API rest amb dades de prova,
    un servei o un back end que ens retorna dades en JSON
    Rebrem petcions per POST, PUT, GET, etc

    Aquest servei rebrà un JSON i retornarà una
    informació en JSON,

    Mitjançant aquest BACKEND es desarà informació 
    a la nostra base de dades, per això realitzem una API*/
//Fetch i peticions a serveis / apis rest
// Fa peticions assíncrones a un servidor
// això és una promesa, utilitzarem el mètode 
// then per a recollir dades
=======
>>>>>>> 3c53bebc0c7874c209764d25f23127b8c66e827d:UF2/ex3Fetch/js/01-fetch.js
function resolveAfter2seconds() {
    return new Promise(resolve => (
        setTimeout(() =>(
            resolve("resolved")
        ), 2000)
    ))
}
// mostra els camps id, avatar, Nom i Cognoms, email en una taula, amb una fila per cada usuari, en aquest ordre.
<<<<<<< HEAD:UF2/ex3_1Fetch/js/01-fetch.js
function taula(usuaris) {
    document.write("<table>")
    document.write("<tr>")
    for (let i = 0; i < 10; i++) {
        fila++;
        row=usuaris[i]
        document.write("<td id='"+i+"' onclick=canvia("+i+")>?</td>")
        if (fila==4) {
            fila=0;
            document.write("</tr>")
            document.write("<tr>")
        }else if(i == usuaris-1){
            document.write("</tr>")
        }
    }
    document.write("</table>")
}
=======
>>>>>>> 3c53bebc0c7874c209764d25f23127b8c66e827d:UF2/ex3Fetch/js/01-fetch.js
var usuaris = [];
fetch("https://reqres.in/api/users")
    .then(data => data.json())
    .then(data => {
        usuaris = data.data;
        console.log(usuaris);
<<<<<<< HEAD:UF2/ex3_1Fetch/js/01-fetch.js
        console.log(usuaris[0]);
    });
taula(10)
/*
    .then(users => {
           llistatUsuaris(users.data);
    }); 
*/
// Passos:
//      * Fetch accedeix a unes dades remotes
//      * url on hi la les dades en el fetch
//      * CAPTUREM LES DADES  amb la funció de call back
//      * convertim a JSON
//      * les dades ja estan a la variable data
//      * la promesa queda a l'espera del proper then
//      * a usuaris hi desem l'array de dades d'objectes JSON
=======
        var lista=""
        lista=lista + "<table>"
        usuaris.forEach(user => {
            lista = lista +"\n"+"<tr>"
            lista = lista +"\n"+"<td>"+user.id+"</td>"
            lista = lista +"\n"+"<td> <img src='"+user.avatar+"'</td>"     
            lista = lista +"\n"+"<td>"+user.first_name+"</td>"      
            lista = lista +"\n"+"<td>"+user.last_name+"</td>"
            lista = lista +"\n"+"<td>"+user.email+"</td>"    
            lista = lista +"\n"+"</tr>"
        });
        lista=lista + "</table>"
        document.getElementById("usuaris").innerHTML=lista

    });
>>>>>>> 3c53bebc0c7874c209764d25f23127b8c66e827d:UF2/ex3Fetch/js/01-fetch.js
