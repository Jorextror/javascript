var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
// classe Desuadora
var Desuadora = /** @class */ (function (_super) {
    __extends(Desuadora, _super);
    function Desuadora() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Desuadora.prototype.setCaputxa = function (caputxa) {
        this.caputxa = caputxa;
    };
    Desuadora.prototype.getCaputxa = function () {
        return this.caputxa;
    };
    return Desuadora;
}(TShirt));
var desuadoraAmics = new Desuadora("Vermell", "Maniga Llarga", "MArca2", "M", 25);
console.log(desuadoraAmics);
desuadoraAmics.setCaputxa(true);
desuadoraAmics.setColor("Blau");
console.log(desuadoraAmics);
