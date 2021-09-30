/*Fes una funció en javascript que donada una quantitat d’euros ens retorni el seu valor en tres tipus de monedes. 
Utilitza les funcions de callBack, (és a dir funcions com expressions)*/

function dolars(euros) {
    return (1.16*euros/1);
}

function peseta(euros) {
    return (166.38*euros/1);
}

function pesos(euros) {
    return (23.75*euros/1);
}

function moneda(euros,fun) {
    console.log(fun(euros));
}

moneda(30,dolars);