// En javascript seria
function getNumero(numero=0) {
    return "El num és "+numero;
}
console.log(getNumero(12));

// En TypeScript

function getNumeroTS(numero:number=0):string {
    return "El num és "+numero;
}
console.log(getNumero(12));
console.log(getNumeroTS(2));



