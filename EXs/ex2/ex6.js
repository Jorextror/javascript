/*Fes una funció en javascript que donada una quantitat d’euros ens retorni el seu valor en tres tipus de monedes. 
Utilitza les funcions de callBack, (és a dir funcions com expressions)*/

const dolars = euros => 1.16*euros/1
const peseta = euros => 166.38*euros/1 
const pesos = euros => 23.75*euros/1

function moneda(euros,dolars,peseta,pesos) {
    console.log(euros+" euros = "+dolars+" dolars = "+peseta+" peseta = "+pesos+" pesos.");
}

let euros = 30
moneda(euros,dolars(euros),peseta(euros),pesos(euros));