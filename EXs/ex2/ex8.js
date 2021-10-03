/*Definiu una funció de fletxa dividirXDos que accepta un número i retorna aquest número dividit per 2. 
Fes una funció genèrica, que rep un array i una funció i l’aplica a tots els elements de l’array.*/
array=[(2),(4),(43)]

const dividirXDos = num1 => num1/2

function General(array, dividirXDos) {
    for (let i = 0; i < array.length; i++) {
        pos=array[i]
        console.log(dividirXDos(pos))
    }
}

General(array, dividirXDos)