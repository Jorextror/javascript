let ex2=[0, 1, false, 2, undefined, '', 3, null]
let ex4=[7, 9, 0, -2]
let ex4_1="un text"
let ex6=[4, 6, 2, ,7 ,7, 3, 5, 3, 7]
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

    var senarnum = 0;

    var senars = (arrays) => {
        for (let i = 0; i < arrays.length; i++) {
            if(arrays[i]%2!=0){
                senarnum+=1;
            }
        }
        return senarnum;
    }
    var mitjana = (arrays) => (arrays.reduce((x,y) => x+=y))/arrays.length
    var gran = (arrays) => Math.max.apply(null, arrays)
    var petit = (arrays) => Math.min.apply(null,arrays)

    console.log(mitjana(arrays),gran(arrays),petit(arrays),senars(arrays))
}

function arrays6(arrayb) {
    /*Fes una funció en javascript que donat un array retorni quin és l’element que té més repeticions.*/
    // let coun = 0
    // let max=0
    // let arrays = arrayb.sort();
    // let car=arrays[0];
    // for (let i = 0; i < arrays.length; i++) {
    //     if (car==i){
    //         if (coun > max) {
    //             max=coun
    //             car=i
    //         }
    //         coun+=1
    //     } else {
    //         coun=0
    //     }
    // }
    // return car;
    let arrays = arrayb.sort();

    var indices = new Array(arrays.length); // colocar en vez de 8 el max del array "x"
    indices.fill(0);
    
    for (var i = 0; i < indices.length; i++) {
    
      for (var j = 0; j < arrays.length; j++) {
        if (i == arrays[j]) {
          indices[i] = indices[i] + 1;
        }
      }
    }
    console.log(indices);
    console.log("INCOMPLETO")
}

function arrays7(arr) {
    /*1. demani 6 números per teclat i els posis en un array,
    2. En una funció ha de mostrar tots els elements de l'array en el body amb una llista desordenada (un a un "forEach") i en la consola (de cop),
    3. Ordenar i mostrar l'array numèricament (reutilitzem el mostrar)
    4. Girar l'array i mostra’l
    5. Mostra quants elements té l'array
    6. Fer una funció que permet cercar un valor introduït per l'usuari i retorni l'índex.*/
    /*
    // 1.
    let arr=[]
    for (let i = 0; i < 6; i++) {
        num = prompt("num: ");
        arr.push(num);
    }
    */
    console.log ("ex2.")
    function mostrar(arr) {
        let mostra=[]
        arr.forEach(element => {
            console.log(element)
            mostra.push(element)
        });
        return mostra;
    }
    console.log(mostrar(arr));

    console.log("ex3.")
    function comparar(a, b) {
        return a - b;
    }
    ordenat = mostrar(arr.sort(comparar))

    console.log("ex4.")
    console.log (girar= ordenat.reverse());

    console.log("ex5.")
    console.log(girar.length);

    console.log("ex6.")
    function cercar(num) {
        return arr.indexOf(num)
    }
    console.log(cercar(101))
}

function arrays8() {
    var matriu=[];

    for (let i = 0; i < 1000; i++) {
        if (Math.floor(Math.random()*10)>=5) {
            iva = 0.10
        }else{
            iva = 0.21
        }
        matriu.push([Math.floor(Math.random() * 1000),iva,Math.floor(Math.random() * 10)])
    }

    console.log(matriu)

    for (let j = 0; j < matriu.length; j++) {
        function ImportsF(values,index,array) {return values[0]}
        function iva(values,index,array) {return values[1]}
        function pvp(values,index,array) {return values[2]}

        var importsF=matriu.map(ImportsF);
        var IVA=matriu.map(iva);
        var PVP=matriu.map(pvp);
    }

    for (let k = 0; k < matriu.length; k++) {
        document.write(importsF[k]*PVP*[k]+" euros (Sense IVA)"+"<br>")
        document.write(importsF[k]*PVP*[k]*IVA[k]+" euros (AMB IVA)"+"<br>")
    }
}

function arrays9() {
    let ll=[]

    function genera() {
        var arrays=[];
        for (let i = 0; i < 100; i++) {
            arrays.push(Math.floor(Math.random()* (100 - 1))+1)
        }
        return arrays
    }

    const distinct = (value, index, self) => {
        return self.indexOf(value) === index;
    }

    let arr1 = genera()
    let arr2 = genera()

    let arr1u = arr1.filter(distinct);
    let arr2u = arr2.filter(distinct);

    if ((arr1u.length) < (arr2u.length)){
        long=arr2u.length
    } else {
        long=arr1u.length
    }

    for (let i = 0; i < long; i++) {
        for (let j = 0; j < i; j++) {
            if (arr1u[i] == arr2u[j]) {
                ll.push(arr2u[j])
            }
        }
    }
    return ll
}

function arrays10(arr) {
    var tipo = typeof arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] != tipo) {
            return false
        }
    }
    return true
}

// console.log(arrays1(5,"b"))/*

// console.log(arrays2(ex2))

// console.log(arrays3(ex4))

// console.log(arrays4(ex4,3))

// console.log(arrays5([1,2,3,4,5]))

console.log(arrays6(ex6))

// arrays7(ex7)

// arrays8()

// console.log(arrays9())

// console.log(arrays10([10, 32, 23, 12, 12, "154"]))