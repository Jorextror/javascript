var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//---- 1 classe persona ----
var Persona = /** @class */ (function () {
    //constructor
    function Persona(nom, cognom) {
        this.nom = nom;
        this.cognom = cognom;
    }
    //set i get
    Persona.prototype.setName = function (nom) {
        this.nom = nom;
    };
    Persona.prototype.setCognom = function (cognom) {
        this.cognom = cognom;
    };
    Persona.prototype.getName = function () {
        return this.nom;
    };
    Persona.prototype.getCognom = function () {
        return this.cognom;
    };
    //methode
    Persona.prototype.nomComplet = function () {
        return this.nom + " " + this.cognom;
    };
    ;
    return Persona;
}());
var jordi = new Persona('jordi', 'oliveda');
jordi.setName("Jordi");
console.log(jordi.nomComplet());
//---- 2 array 3 persones ----
var array2persones = [new Persona('Joe', "Doe"), new Persona('Jane', 'Dane'), new Persona('George', 'Smith')];
function llistar(persones) {
    persones.forEach(function (element) {
        console.log(element.nomComplet());
    });
}
llistar(array2persones);
//---- 3 herencia ----
var Treballador = /** @class */ (function (_super) {
    __extends(Treballador, _super);
    function Treballador(nom, cognom, num, sou) {
        var _this = _super.call(this, nom, cognom) || this;
        _this.num = num;
        _this.sou = sou;
        return _this;
    }
    //set i get
    Treballador.prototype.setNum = function (num) {
        this.num = num;
    };
    Treballador.prototype.setSou = function (sou) {
        this.sou = sou;
    };
    Treballador.prototype.getNum = function () {
        return this.num;
    };
    Treballador.prototype.getSou = function () {
        return this.sou;
    };
    return Treballador;
}(Persona));
//arrays
var t1 = new Treballador('Joe', "Doe", 1, 1200);
var t2 = new Treballador('Jane', 'Dane', 2, 500);
var t3 = new Treballador('George', 'Smith', 3, 800);
var array2trebalaldos = new Array();
array2trebalaldos.push(t1);
array2trebalaldos.push(t2);
array2trebalaldos.push(t3);
//funcio suma tots els sous
function despeses_salarials(treballadors) {
    var total = 0;
    treballadors.forEach(function (element) {
        total = total + element.sou;
    });
    return total;
}
var salaritotal = despeses_salarials(array2trebalaldos);
console.log(salaritotal);
var Cat = /** @class */ (function () {
    function Cat(mew) {
        this.mew = mew;
    }
    Cat.prototype.eat = function () {
        console.log("gat menja");
    };
    Cat.prototype.sleep = function () {
        console.log("gat dorm");
    };
    return Cat;
}());
var Dog = /** @class */ (function () {
    function Dog(bark) {
        this.bark = bark;
    }
    Dog.prototype.eat = function () {
        console.log("gos menja");
    };
    Dog.prototype.sleep = function () {
        console.log("gos dorm");
    };
    return Dog;
}());
var Bird = /** @class */ (function () {
    function Bird(tweet) {
        this.tweet = tweet;
    }
    Bird.prototype.eat = function () {
        console.log("pajaro menja");
    };
    Bird.prototype.sleep = function () {
        console.log("pajaro dorm");
    };
    return Bird;
}());
var gat = new Cat(true);
gat.eat();
gat.sleep();
var gos = new Dog(true);
gos.eat();
gos.sleep();
var pajaro = new Bird(true);
pajaro.eat();
pajaro.sleep();
