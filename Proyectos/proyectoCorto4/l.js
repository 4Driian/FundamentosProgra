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
