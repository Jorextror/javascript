'use strict'

// https://javascript.info/promise-chaining

// encadenament de promeses
// Promise chainig
// Quant són útils?? quan haguem de llegir un arxiu, 
// Esperar les dades d'un formulari, etc

new Promise(function(resolve, reject) {
    setTimeout(() => resolve(1), 1000);
  
  }).then(function(result) {
    alert("Carregant..."+result); // 1
  

    
    return new Promise((resolve, reject) => { // (*)
      setTimeout(() => resolve(result + 1), 1000);
    });
  
    }).then(function(result) { // (**)
      alert("Carregant..."+result); // 2
  


      return new Promise((resolve, reject) => {
        setTimeout(() => resolve(result + 1), 1000);
      });
  
      }).then(function(result) {
        alert("Carregant..." + result); // 3
  
      });
