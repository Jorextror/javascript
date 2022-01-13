//Definim un classe i els seus atributs
// https://javascript.info/private-protected-properties-methods

//  public - les propietats estan disponibles per a modificar-les
//  private- desde dins de la classe

class Samarreta {
    public color: string;
    public model: string;
    public marca: string;
    public talla: string;
    public preu: number;
}

var samarreta = new Samarreta();

samarreta.color="vermell";
samarreta.model= "T_SHIRT";
samarreta.marca = "NoThiFixis";
samarreta.talla = "M";
samarreta.preu = 10;

console.log(samarreta);

var samarreta2 = new Samarreta();

samarreta2.color="blau";
samarreta2.model= "T_SHIRT";
samarreta2.marca = "NoThiFixis";
samarreta2.talla = "L";
samarreta2.preu = 11;

console.log(samarreta2);

export class TShirt {
    private color: string;
    private model: string;
    private marca: string;
    private talla: string;
    private preu: number;

    // constructors per donar valors inicials a un objecte que creem
    // s'executa automàticament qun creem l'objecte

    constructor(color, model, marca, talla, preu){
        this.color = color;
        this.model = model;
        this.marca = marca;
        this.talla = talla;
        this.preu = preu;

    }

    // Setters i Getters

    
    public setColor(color:string) {
        this.color = color;

    }
     public getColor():string {
         return this.color;
     }
}

var tshirt = new TShirt("blau","maniga curta","NothiFixis","XL",15);
tshirt.setColor("vermell");


console.log(tshirt);







