let num1;
const girar = num1 => num1.split("").reverse().join("");
// split separa la array cada caracte, reverse gira, join junta la array en un string
do {
    num1=prompt("numeros?")
} while (isNaN(num1));

document.write(girar(num1));