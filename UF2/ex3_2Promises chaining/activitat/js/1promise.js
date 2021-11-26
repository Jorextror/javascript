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
                    console.log(data1)
                    let name = data1[0].name.common
                    let currencies= data1[0].currencies
                    let lang = data1[0].languages[0]
                    if (data.country == "Germany"){
                        currencies=data1[0].currencies.EUR.name
                        lang = data1[0].languages.deu
                    }
                    if  (data.country == "India"){
                        currencies=data1[0].currencies.INR.name
                        lang = data1[0].languages.eng
                    }
                    if  (data.country == "South Africa"){
                        currencies=data1[0].currencies.ZAR.name
                        lang = data1[0].languages.afr
                    }
                    let capital = data1[0].capital
                    let population =data1[0].population
                    let flag = data1[0].flags.png
                    
                    let taula=`<table><tr><td><img src=${flag}><td><td><ul><li>Pais: ${name}</li><li>Moneda: ${currencies}</li><li>Idioma: ${lang}</li><li>Capital: ${capital}</li><li>Habitans: ${population}</li><ul></td></tr></table>`
                    document.write(taula)
                })
        })
        //4.
        .catch(error => {
            console.log(error+"=> hi ha hagut un error")
            alert("Error en les peticions");
        });
}
whereAmI(52.508,13.381);
whereAmI(19.037,72.873);
whereAmI(-33.933,18.474);