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
    Persona.prototype.getName = function () {
        return this.nom;
    };
    return Persona;
}());
var jordi = new Persona('jordi', 'oliveda');
jordi.setName("Jordi");
console.log(jordi.getName());
