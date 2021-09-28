/*Escriviu una funció que donat un array d’anys de naixement, calculi per cadascun dels elements:
l’edat
si són majors d’edat (si ja ho són retorna -1)
quants anys els falta per jubilar-se (si ja ho estan retorna -1)

fes servir funcions passades com a paràmetres. Escriu 3 versions, amb la funció definida a part, amb la funció definida a la crida, i amb la funció definida a la crida, però de fletxa.
*/

const ans = [2006,1997,2000,1976];

function Parays(ans, mayor) {
    for (let i = 0; i < ans.length; i++) {
        mayor (ans[i])
        
    }
}

function mayor(anynaixament) {
    if ((2021-anynaixament)>18) {
        console.log("mayor");
    } else {
        console.log("menor");
    }
}