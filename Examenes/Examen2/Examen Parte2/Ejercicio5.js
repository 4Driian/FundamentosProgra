/*Escriba un programa en JavaScript para imprimir el siguiente
patrón usando for loop. */
/* 1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
1 2 3 4 5 6
1 2 3 4 5 6 7
1 2 3 4 5 6 7 8 */

let array = [];
let numero = 1;

for (let i = 0; i < 8; i++) {
    array [i] = numero;
    numero ++;
    console.log(array);
}