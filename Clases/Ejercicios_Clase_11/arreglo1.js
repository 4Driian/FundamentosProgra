/*Desarrolle un programa que permita ingresar 10 números 
enteros dentro de un arreglo y posteriormente muestre la 
sumatoria de todos lso números enteros guardados en el 
arreglo. */

const numeros = [];
const argvNumeros = process.argv.slice(2);
let sumatoria = 0;

for (let i = 0; i < argvNumeros.length; i++) {
    numeros.push(parseInt(argvNumeros[i]));
}

for (let i = 0; i < numeros.length; i++) {
    sumatoria += numeros[i];
}
console.log("La sumatoria es", sumatoria)