/*Desarrollo un programa que tenga los siguientes arreglos 
[12,45,67,27,89,84,65,21,44] y [15,23,47,67,29,94,23,12,33] y 
devuelva un nuevo arreglo con la suma de los dos anteriores. */

const arr = [12,45,67,27,89,84,65,21,44];
const arr2 = [15,23,47,67,29,94,23,12,33];
let arrayNew = [];

for(let i = 0; i < arr.length; i++){
    arrayNew[i] = arr[i] + arr2[i];
}
console.log("La suma es:",arrayNew)

