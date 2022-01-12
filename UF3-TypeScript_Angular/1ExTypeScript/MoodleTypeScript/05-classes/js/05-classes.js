"use strict";
//Definim un classe i els seus atributs
// https://javascript.info/private-protected-properties-methods
exports.__esModule = true;
//  public - les propietats estan disponibles per a modificar-les
//  private- desde dins de la classe
var Samarreta = /** @class */ (function () {
    function Samarreta() {
    }
    return Samarreta;
}());
var samarreta = new Samarreta();
samarreta.color = "vermell";
samarreta.model = "T_SHIRT";
samarreta.marca = "NoThiFixis";
samarreta.talla = "M";
samarreta.preu = 10;
console.log(samarreta);
var samarreta2 = new Samarreta();
samarreta2.color = "blau";
samarreta2.model = "T_SHIRT";
samarreta2.marca = "NoThiFixis";
samarreta2.talla = "L";
samarreta2.preu = 11;
console.log(samarreta2);
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
    TShirt.prototype.setColor = function (color) {
        this.color = color;
    };
    TShirt.prototype.getColor = function () {
        return this.color;
    };
    return TShirt;
}());
exports.TShirt = TShirt;
var tshirt = new TShirt("blau", "maniga curta", "NothiFixis", "XL", 15);
tshirt.setColor("vermell");
console.log(tshirt);
