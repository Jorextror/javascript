// Cotxes (versió javascript antic):
//- Utilitzeu una funció constructora per implementar un cotxe. Un cotxe té una propietat de marca i velocitat. 
// La propietat de velocitat és la velocitat actual del cotxe en km / h;

//- Implementar un mètode "accelerar" que augmentarà la velocitat del cotxe en 10 i 
// registrar la nova velocitat a la consola;

//- Implementeu un mètode de "fre" que reduirà la velocitat del cotxe en 5 i registreu la nova velocitat a la consola;

//- Creeu 5 objectes de cotxes i deseu-los en un array.  Treballarem amb  "accelerar" i "frenar" 
// ,mostreu la informació per la consola, mostreu la velocitat al costat. Afegiu una característica. 
// La velocitat no pot ser negativa

var constructora = function (marca,velocitat) {
    return `marca:${marca}, velocitat:${velocitat}`;
}  

var accelerar = function (velocitat){
    console.log(`velocitat:${velocitat+10}`);
}

var fre = function (velocitat) {
    if (velocitat >= 5) {
        console.log(`velocitat:${velocitat-5}`)
    }
    console.log(`velocitat:${velocitat}`)
}

var cotxe ={
    marca: 'audi',
    velocitat: 80
}
var cotxe2 ={
    marca: 'peugeot',
    velocitat: 100
}
var cotxes = [cotxe, cotxe2]
