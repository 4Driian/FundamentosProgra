/*Desarrolle un programa que almacene
los sigiuentes numeros en un arreglo de elementos
enteros: 13, 45, 67, 89, 12, 14, 2, 90, 34*/

let numeros = parseInt(process.argv.slice(2));
let contador1 = 0;
let contador2 = 1;
let arr = [];

menor = numeros;
mayor = numeros;

while (contador1 <9) {
    arr [contador1] = numeros;
    if (numeros > mayor) {
        mayor = numeros;
    }
    else if (numeros < menor) {
        menor = numeros
    }
    contador1 ++;
    contador2 ++;
    numeros = parseInt(process.argv.slice(contador2))
}
console.log("El numero mayor es:", mayor,"Y el numero menor es",menor)