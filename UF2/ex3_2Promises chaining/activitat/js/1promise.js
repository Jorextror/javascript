"use strict";
//1. funcion cordenadas
function whereAmI(lat,lng) {
    fetch("https://geocode.xyz/"+lat+","+lng+"?geoit=json")
        .then(data => data.json())
        //3.
        .then(data => {
            console.log("Esteu a "+data.city +", "+data.country);
            //6
            fetch("https://restcountries.com/v3.1/name/"+data.country)
                .then(data1 => data1.json())
                .then(data1 =>{
                    console.log(data1);
                    document.write("<table>")
                    document.write("<tr>")
                    document.write("<td>"+ data1.name +"</td>")
                    document.write("<td>"+ data1.currencies +"</td>")
                    document.write("<td>"+ data1.languages +"</td>")
                    document.write("<td>"+ data1.capital +"</td>")
                    document.write("<td>"+ data1.population +"</td>")
                    document.write("</tr>")
                    document.write("<tr>")
                    document.write("<td><img src=${"+ data1.flags +"}></td>")
                    document.write("</tr>")
                    document.write("</table>")
                })
        })
        //4.
        .catch(error => {
            console.log(error+"=> hi ha hagut un error")
            alert("Error en les peticions");
        });
}
whereAmI(52.508,13.381);

// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);

// PART 2
// 6. Ara és hora d'utilitzar les dades rebudes per representar un país. Per tant, 
// agafeu l'atribut pertinent del resultat de l'API de geocodificació i connecteu-lo a l'API de països. https://restcountries.com
// Dades que cal mostrar del país:

// 7. Mostreu la següent informació del país i detecteu els errors (podeu generar una taula de 2 columnes,  
// amb la bandera a l’esquerra i la resta d’informació en una llista (ul) a la dreta):

// Nom oficial 
// Monedes 
// Idiomes 
// Bandera 
// Capital 
// Habitants 

