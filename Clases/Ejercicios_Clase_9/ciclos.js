/*Imprimir los numeros del 0 al 3 
Cuando algo se repite dos o mas veces tengo que pensar en usar un bucle o un ciclo
0
1
2
3

console.log(0)
console.log(1)
console.log(2)
console.log(3)
*/

let i=1;
while (i <= 20){ /*Muy similar al "if" - el while evalua la condición primero (si es verdadera ingresa al ciclo) */
    console.log("El número es"+i);
    i+=1; /*+=1 -> Le suma 1 a la variable, en este caso a l avariable i */
}

console.log("El programa terminó");