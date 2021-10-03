/*Escriviu una funció que donat un array d’anys de naixement, calculi per cadascun dels elements:
l’edat
si són majors d’edat (si ja ho són retorna -1)
quants anys els falta per jubilar-se (si ja ho estan retorna -1)

fes servir funcions passades com a paràmetres. Escriu 3 versions, amb la funció definida a part, amb la funció definida a la crida, i amb la funció definida a la crida, però de fletxa.
*/
const anss = [2016,1997,2000,1976,2030];

const edad = ans => 2021-ans;
const mayor = anynaixament => (2021-anynaixament)>=18;

function jubilat(ans) {
    if ((2021-ans)>=67){
        return true;
    } else {
        return 67-2021-ans;
    }
}

function tractaAnys(ans,fun) {
    for (let i = 0; i < ans.length; i++) {
        console.log(fun(ans[i]))
    }
}    
tractaAnys(anss,jubilat);