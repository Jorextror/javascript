let ex2=[0, 1, false, 2, undefined, '', 3, null]
let ex4=[7, 9, 0, -2]
let ex4_1="un text"
let ex6=[4, 6, 2, ,7 ,3, 3, 5, 3, 7]
let ex7=[1000, 101, 121, 13, 15, 11111]

function arrays1(vega,letra) {
    let ll=[]
    for (let i = 0; i < vega; i++) {
        ll.push(letra)
    }
    return ll
}

function arrays2(arrayb) {
    let no=[false, undefined, '', null, "", 0];
    let i=0;
    let sortir=false;
    while (!sortir) {
        if (no.includes(arrayb[i])) {
            arrayb.splice(i,1);
        } else  i++;
        if (i == arrayb.length) sortir=true
    }
    console.log(arrayb);
}

function arrays3(arrayb) {
    let identity = (x) => x;
    arrayb.map(identity);
    console.log(arrayb);
}

function arrays4(arrays, n="") {
    let ll=[]
    if (Array.isArray(arrays)){
        if (n=="") {
            return arrays[0];
        } else {
            for (let i = 0; i < n; i++) {
                ll.push(arrays[i]);
            }
            return ll;
        }

    } else {
        return "No és una Array";
    }
}


function arrays5(arrays) {
    /*=> una funció que mostra quants nombres senars hi ha
    => una funció que  retorna la mitjana de tots els elements de l’array
    => una funció que retorna el més gran
    =>una funció que retorna el més petit*/

    arrays.forEach(element => {
        const senar = (arrays) => {}

    });
}

function arrays6(arrayb) {
    /*Fes una funció en javascript que donat un array retorni quin és l’element que té més repeticions.*/
    let coun = 0
    let max=0
    let car=arrayb[0];
    let arrays = arrayb.sort();
    for (let i = 0; i < arrays.length; i++) {
        if (car==i){
            coun+=1
            if (coun > max) {
                car=i
            }
        } else {
            coun=0
        }
    }
    return car;
}

function arrays7() {
    /*1. demani 6 números per teclat i els posis en un array,
    2. En una funció ha de mostrar tots els elements de l'array en el body amb una llista desordenada (un a un "forEach") i en la consola (de cop),
    3. Ordenar i mostrar l'array numèricament (reutilitzem el mostrar)
    4. Girar l'array i mostra’l
    5. Mostra quants elements té l'array
    6. Fer una funció que permet cercar un valor introduït per l'usuari i retorni l'índex.*/
    // 1.
    let arr=[]
    for (let i = 0; i < 6; i++) {
        num = prompt("num: ");
        arr.push(num);
    }
    // 2.
    arr.forEach(element => {
        console.log(element)
    });
}
// console.log(arrays1(5,"b"))

// console.log(arrays2(ex2))

// console.log(arrays3(ex4))

// console.log(arrays4(ex4,3))

// console.log(arrays5(ex4))

// console.log(arrays6(ex6))

arrays7()
