// Cotxes (versió javascript antic):
//- Utilitzeu una funció constructora per implementar un cotxe. Un cotxe té una propietat de marca i velocitat. 
// La propietat de velocitat és la velocitat actual del cotxe en km / h;

//- Implementar un mètode "accelerar" que augmentarà la velocitat del cotxe en 10 i 
// registrar la nova velocitat a la consola;

//- Implementeu un mètode de "fre" que reduirà la velocitat del cotxe en 5 i registreu la nova velocitat a la consola;

//- Creeu 5 objectes de cotxes i deseu-los en un array.  Treballarem amb  "accelerar" i "frenar" 
// ,mostreu la informació per la consola, mostreu la velocitat al costat. Afegiu una característica. 
// La velocitat no pot ser negativa
console.log("--Ex1--");
//constructor
function Cotxe(marca,velocitat) {
    this.marca = marca;
    this.velocitat = velocitat;
}
//metode
Cotxe.prototype.accelerar = function() {
    this.velocitat=this.velocitat+10;
}
Cotxe.prototype.fre = function() {
    if (this.velocitat-5<=0) {
        this.velocitat=0;
    }else{
        this.velocitat=this.velocitat-5;
    }
}
//instancia class
var cotxe =[new Cotxe('audi',80), new Cotxe('peugeot',100), new Cotxe('carroza',7)];
//llamada metode
console.log(cotxe[0].marca);//test
console.log(cotxe[0].velocitat);
cotxe[0].accelerar();
console.log(cotxe[0].velocitat);
cotxe[0].fre();
console.log(cotxe[0].velocitat);

console.log(cotxe[2].marca);//test de free
console.log(cotxe[2].velocitat);
cotxe[2].fre();
console.log(cotxe[2].velocitat);
cotxe[2].fre();
console.log(cotxe[2].velocitat);