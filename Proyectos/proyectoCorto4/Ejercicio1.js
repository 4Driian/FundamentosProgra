/*Desarrolle un programa en JavaScript que almacene los números que el usuario 
digite en una matriz de 2x2, luego saque el promedio de toda la matriz.   
a. Promedio = 4 elementos (10, 20, 30, 40)  
i. Suma = (10+20+30+40) / 4 */

let numeros = process.argv.slice(2);
let arr = [];

for (let x = 0; x < 4; x++) {
    arr.push(parseInt(numeros[x]));
}

const matrices = [
    [arr[0], arr[1]],
    [arr[2], arr[3]],
];

for (let i = 0; i < matrices.length; i++) {
    console.log(matrices[i]);
}

let suma = 0;
for (let f = 0; f < matrices.length; f++) {
    for (let c = 0; c < matrices[f].length; c++) {
        suma += matrices[f][c];
    }
}

let promedio = suma / arr.length
console.log(promedio);
