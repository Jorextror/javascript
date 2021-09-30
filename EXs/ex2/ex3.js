/*Escriviu una funció anomenada dates en JavaScript que rep un array de nombres p.ex  [14, 15, 16, 17], 
un mes en text p.ex “juny”, i un any, p.ex 2021 i retorna un array com l’exemple.  
Exemple: dates([14, 15, 16, 17], ‘juny’,’2020’)  genera un array amb els següents elements: 
[“14-juny-2021”, “15-juny-2021”, “16-juny-2021”, “17-juny-2021”]*/

let arrays=["14-juny-2021", "15-juny-2021", "16-juny-2021", "17-juny-2021"];
let nombres=[14, 15, 16, 17]
let mes=["juny"]
let any=[2021]

function datesJS(nombres,mes,any) {
    let ll= []
    for (let i = 0; i < nombres; i++) {
        ll.join(i);
    }
    ll.join(mes);
    ll.join(any);
    console.log(ll);
}
console.log(datesJS(nombres,mes,any));