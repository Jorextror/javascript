/*Crea una funció que rebi un paràmetre, 1 dni, i retorni la lletra. 
Si el dni passat té algun error retornarà -1*/
const dni="39422591Q"

function DniLl(dni){
    //separar nums i letras
    var letr = dni.substr(8, 9);
    var numero = dni.substr(0, 8);

    //letra correcta dependiendo del numero
    var letra=['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T']
    var letraC = letra[numero % 23];
    console.log(letraC)

    if (letr.toUpperCase() != letraC) {
        return -1
    } else {
        return letr
    }

}

console.log(DniLl(dni))