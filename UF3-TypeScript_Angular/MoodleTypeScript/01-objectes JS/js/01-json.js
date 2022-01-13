//console.log("Objectes JSON")

var bicicleta = {
    //propietats
    color: 'Vermell',
    model: 'BMX',
    frens: 'disc',
    velMaxima: '60Km',
    //mètodes
    canviarColor: function (nouColor){
        this.color = nouColor;
        console.log(this);
    }
};

console.log(bicicleta);
bicicleta.canviarColor('Blau');
bicicleta.color = 'Groc';
console.log(bicicleta);