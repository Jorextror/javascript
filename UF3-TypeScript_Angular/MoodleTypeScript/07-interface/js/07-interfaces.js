var TShirt = /** @class */ (function () {
    // constructors per donar valors inicials a un objecte que creem
    // s'executa automàticament qun creem l'objecte
    function TShirt(color, model, marca, talla, preu) {
        this.color = color;
        this.model = model;
        this.marca = marca;
        this.talla = talla;
        this.preu = preu;
    }
    // Setters i Getters
    //public set-Color(color:string) {
    TShirt.prototype.setColor = function (color) {
        this.color = color;
    };
    //public get-Color():string {
    TShirt.prototype.getColor = function () {
        return this.color;
    };
    return TShirt;
}());
var tshirt = new TShirt("blau", "maniga curta", "NothiFixis", "XL", 15);
tshirt.setColor("vermell");
console.log(tshirt);
// Herència
