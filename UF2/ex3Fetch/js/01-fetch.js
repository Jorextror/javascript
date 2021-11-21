'use strict';
function resolveAfter2seconds() {
    return new Promise(resolve => (
        setTimeout(() =>(
            resolve("resolved")
        ), 2000)
    ))
}
// mostra els camps id, avatar, Nom i Cognoms, email en una taula, amb una fila per cada usuari, en aquest ordre.
var usuaris = [];
fetch("https://reqres.in/api/users")
    .then(data => data.json())
    .then(data => {
        usuaris = data.data;
        console.log(usuaris);
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