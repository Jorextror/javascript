"use strict";
var div_usuaris = document.querySelector("#usuaris");
var div_usuari2 = document.querySelector("#usuari2");

var usuaris = [];

getUsuaris()
    .then((data) => data.json())

    .then(function (users) {
        llistatUsuaris(users.data);
        return new Promise(function (resolve, reject) {
            setTimeout(() => resolve(1), 2000);
    })
    .then(function (result) {
        alert("Han passat 2 segons 2a promesa...");
        return getUsuari_2();
      })
    .then((data) => data.json())
    .then((usuari_2) => {
        llistatUsuari_2(usuari_2.data);
            return new Promise(function (resolve, reject) {
          setTimeout(() => resolve(1), 1000);
    })
    .then(function (result) {
            alert("Carregant..." + result);
        return getInfo();
            // una altra promesa disponible per a fer un then
    })
    .then((data) => {
            console.log(data);
          })
    })
    });

function getUsuaris() {
  return fetch("https://reqres.in/api/users");
}

function llistatUsuaris(usuaris) {
  usuaris.map((user, i) => {
    let nom = document.createElement("h3");
    nom.innerHTML = i + " " + user.first_name + " " + user.last_name;
    div_usuaris.appendChild(nom);
    document.querySelector(".loading").style.display = "none";
  })
}

function getUsuari_2() {
  return fetch("https://reqres.in/api/users/2");
}

function llistatUsuari_2(user) {
  let nom = document.createElement("h4");
  let avatar = document.createElement("img");
  console.log(user);
  nom.innerHTML = user.first_name + " " + user.last_name;
  avatar.src = user.avatar;
  avatar.with = "100";

  let hr = document.createElement("hr");
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
    http: "https://agora.xtec.cat/inslacetania/",
  };

  // 1r cal fer la promesa un objecte
  return new Promise((resolve, reject) => {
    var teacherS = JSON.stringify(teacher);
    if (typeof teacherS != "string") return reject("Error: l'has liat");
    return resolve(teacherS);

    // ara ja tenimm una altra promesa per encadenar
    // promise chaining
  })
}
