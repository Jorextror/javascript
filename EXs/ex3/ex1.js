let ex2=[0, 1, false, 2, undefined, '', 3, null]
let ex4=[7, 9, 0, -2]

function arrays1(vega,letra) {
    let ll=[]
    for (let i = 0; i < vega; i++) {
        ll.push(letra)
    }
    return ll
}

function arrays2(array) {
    let no=[false, undefined, '', null, "", 0];
    let=0;
    let sortir=false;
    while (!sortir) {
        if (no.includes(array[i])) {
            array.splice(i,1);
        } else i++;
        if (i == array.length) sortir=true
    }
}

function arrays3(arrays) {
    return array==arrays
}

function arrays4(arrays, n="") {
    if (n=="") {
        return arrays[0];
    } else {
        for (let i = 0; i < arrays.length; i++) {
        }
    }
}

console.log(arrays1(5,"b"))

console.log(arrays2(ex2))

console.log(arrays3(ex2))

console.log(arrays4(ex4))