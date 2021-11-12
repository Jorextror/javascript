// Torneu a programar  l’exercici1, però aquesta vegada amb una classe ES6:

// Herència (ES6):
// -Crea una classe nova, filla de cotxe, per implementar un cotxe elèctric (anomenada Ev). 
// A més de la marca i la velocitat actual, l'Ev també té la càrrega actual de la bateria en% (propietat de "càrrega");

// -Implementeu un mètode 'chargeBattery' que prengui un argument 'chargeTo' i estableixi la càrrega de la bateria en 'chargeTo';

// -Implementeu un mètode "accelerar" que augmentarà la velocitat del cotxe en 20 i reduirà la càrrega un 1%. A continuació, 
// registreu un missatge com aquest: "Tesla anirà a 140 km / h, amb una càrrega del 22%";

// -Creeu un objecte de cotxe elèctric i experimenteu amb les crides  "accelerar", "frenar" i "carregar bateria" (carregar al 90%). 
// Fixeu-vos en què passa quan "accelereu". 
console.log("--Ex2--");
class Cotxe{
    //constructor
    constructor(marca,velocitat){
        this.marca=marca;
        this.velocitat=velocitat;
    }
    //metode
    accelerar(){
        this.velocitat=this.velocitat+10
    }
    fre(){
        if (this.velocitat-5<=0) {
            this.velocitat=0
        }else{
            this.velocitat=this.velocitat-5
        }
        console.log(this.marca+" va a "+this.velocitat+" Km/h")
    }
}
class Ev extends Cotxe{
    //constructor
    constructor(marca,velocitat,carrega){
        super(marca,velocitat);
        this.carrega=carrega;
    }
    //metode
    chargeBattery(chargeTo){
        this.carrega=chargeTo
    }
    accelerarE(){
        this.velocitat=this.velocitat+20
        this.carrega--;
        console.log(this.marca+" anirá a "+this.velocitat+" km/h, amb una cárrega de "+this.carrega+"%")
    }
}
//instancia class
var cotxe =[new Cotxe('audi',80), new Cotxe('peugeot',100), new Cotxe('carroza',7)];
smart=new Ev("smart",160,20);//cotxe elèctric
//llamada metode
console.log(cotxe[2].marca,"va a", cotxe[2].velocitat,"Km/h");//test
cotxe[2].fre();
cotxe[2].fre();
console.log(smart.marca+" anirá a "+smart.velocitat+" km/h, amb una cárrega de "+smart.carrega+"%")//test cotxe elèctric
smart.accelerarE()
smart.fre()
smart.accelerarE()
smart.chargeBattery(90)
smart.accelerarE()