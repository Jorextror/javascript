'use strict';
// Fetch
// https://javascript.info/fetch

// jsonplaceholder

// https://jsonplaceholder.typicode.com/
// https://reqres.in


//alert();

/* 
    Un place holder és un API rest amb dades de prova,
    un servei o un back end que ens retorna dades en JSON
    Rebrem petcions per POST, PUT, GET, etc

    Aquest servei rebrà un JSON i retornarà una
    informació en JSON,

    Mitjançant aquest BACKEND es desarà informació 
    a la nostra base de dades, per això realitzem una API

 */

 //Fetch i peticions a serveis / apis rest

// Fa peticions assíncrones a un servidor
// això és una promesa, utilitzarem el mètode 
// then per a recollir dades

// https://reqres.in/api/users?page=2


/*var usuaris2 = [];
 fetch("https://jsonplaceholder.typicode.com/users")
    .then(data => data.json())
    .then(data => {
        usuaris2 = data;
        console.log(usuaris2);
    }); 
*/
var div_usuaris = document.querySelector("#usuaris");
var div_usuari2 = document.querySelector("#usuari2");

var usuaris = [];
// Passos:
//      * Fetch accedeix a unes dades remotes
//      * url on hi la les dades en el fetch
//      * CAPTUREM LES DADES  amb la funció de call back
//      * convertim a JSON
//      * les dades ja estan a la variable data
//      * la promesa queda a l'espera del proper then
//      * a usuaris hi desem l'array de dades d'objectes JSON
//n podem veure q
/*
fetch("https://reqres.in/api/users")
    .then(function(data) {
        return data.json();
    })
    //.then(data => data.json())
    
    .then(users => {
           llistatUsuaris(users.data);
           
    }); 
*/

getUsuaris()
    .then(data => data.json())
    
    .then(users => {
        llistatUsuaris(users.data)
        return getUsuari_2();
    })
        .then(data => data.json())
        .then( usuari_2 => {
            llistatUsuari_2(usuari_2.data);

            return getInfo();
            // una altra promesa disponible per a fer un then

            })
            .then (data => {
                console.log(data);
            })
            .catch(error => {
                console.log(error+"=>hi ha hagut un error");
                alert("Error en les peticions");
            })
            
            ;
    
    
    
 

function getUsuaris() {
    //return fetch("https://reqres.in/api/users");
    return fetch("https://reqlkfñkdres.in/api/users");
}
   
function llistatUsuaris(usuaris) {

        usuaris.map((user,i) => {
        let nom = document.createElement('h3');
        nom.innerHTML = i + " " + user.first_name + " " + user.last_name;
        div_usuaris.appendChild(nom);
        document.querySelector(".loading").style.display = "none";

    });
}

function getUsuari_2() {
    return fetch("https://reqres.in/api/users/2");
}

function llistatUsuari_2(user) {

    let nom = document.createElement('h4');
    let avatar = document.createElement('img');
    console.log(user);
    nom.innerHTML = user.first_name + " " + user.last_name;
    avatar.src = user.avatar;
    avatar.with = "100";


    let hr = document.createElement('hr');
    div_usuari2.appendChild(hr);
    div_usuari2.appendChild(nom);
    div_usuari2.appendChild(avatar);
    
    document.querySelector("#usuari2 .loading").style.display = "none";


}
// fer una promesa des de 0
function getInfo() {
    var teacher = {
        nom: "Pilar",
        curs: "Segon DAW",
        http: "https://agora.xtec.cat/inslacetania/"
    };

    // 1r cal fer la promesa un objecte 
    return new Promise((resolve, reject) => {

        var teacherS = JSON.stringify(teacher);
        if (typeof teacherS != 'string') 
            return reject("Error: l'has liat");
        return resolve(teacherS);
    
       // ara ja tenimm una altra promesa per encadenar
       // promise chaining
    });

   
    
}
