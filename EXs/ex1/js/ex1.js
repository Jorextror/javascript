console.log('ex1');
//Feu un programa que demani dos nombres i ens digui amb una alerta, si són iguals,o bé quin és el més gran i quin és el més petit. (feu el programa robust)
//Afegeix que si el nombres no són de tipus nombre o bé són negatius, que els torni a demanar. Ajuda isNaN();
let num1,num2;
do {
    num1=prompt("Numero1?")
    num2=prompt("Numero2?")
} while (isNaN(num1) || isNaN(num2) && num1 <=0 || num2 <=0)

if (num1 == num2) {
    alert("Los numeros son iguales")
}else if (num1 > num2) {
    alert("El num1 es mes gran que el num2")   
}else {
    alert("El num2 es mes gran que el num1")
}

/*
buu=false
while (!buu) {
    let num1=prompt("Numero1?");
    let num2=prompt("Numero2?");    

    if (isNaN(num1) || isNaN(num2) && num1 <=0 || num2 <=0) {
        alert("Error, debes poner numeros positivos")
    }else{
        buu=true
        if (num1 == num2) {
            alert("Los numeros son iguales")
        }else if (num1 > num2) {
            alert("El num1 es mes gran que el num2")   
        }else {
            alert("El num2 es mes gran que el num1")
        }
    }
}
*/