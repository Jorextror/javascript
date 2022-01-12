interface TShirtBase {
    
    // quins mètodes ha de tenir una classe obligatòriament
    // fer el codi més robust 

    setColor(color);
    getColor();


}


class TShirt implements TShirtBase{
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

    //public set-Color(color:string) {
    public setColor(color:string) {
        this.color = color;

    }
    //public get-Color():string {
    public getColor():string {
         return this.color;
     }
}

var tshirt = new TShirt("blau","maniga curta","NothiFixis","XL",15);
tshirt.setColor("vermell");

console.log(tshirt);

// Herència








