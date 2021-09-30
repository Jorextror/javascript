/*Fes una funció en javascript que retorni el nombre de vegades que un determinat caràcter apareix en un string.*/

function vega(nombre, string) {
    let con=0;
    for (let i = 0; i < string; i++) {
        if (nombre==i) {
            con+=1;
        }
    }
    return con;
}

console.log(vega(a,"una funció en javascript"));