console.log('ex2');
/*Utilitzant un bucle demana a l’usuari  nombres introduïts 
per teclat fins que introdueix un nombre negatiu. És a dir, 
l’usuari anirà introduint nombres, fins que introdueix un nombre negatiu. 
Finalment mostra la mitjana i l’acumulat de tots els nombres positius; */

let num1=0,count=0,total=0
do {
    num1=prompt("Numero1?");
    count++
    num1=Number(num1)
    total+=num1
} while (num1 >0);
count=count-1
total=total-num1

document.write("La media es ",total/count);