// En javascript seria
function getNumero(numero) {
    if (numero === void 0) { numero = 0; }
    return "El num és " + numero;
}
console.log(getNumero(12));
// En TypeScript
function getNumeroTS(numero) {
    if (numero === void 0) { numero = 0; }
    return "El num és " + numero;
}
console.log(getNumero(12));
console.log(getNumeroTS(2));
