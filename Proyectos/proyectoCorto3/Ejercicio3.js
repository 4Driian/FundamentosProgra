/*Desarrolle un programa que lea 10 numeros enteros y mostrar
la media de los valores positivos y la de los valores negativos*/

let numeros = parseFloat(process.argv.slice(2));
let contador1 = 1;
let contador2 = 2;
let contadorPositivos = 0;
let contadorNegativos = 0;
let promedio1 = 0;
let promedio2 = 0;

while (contador1 <=10) { 
    if (numeros >= 0) {
        promedio1 += numeros;
        contadorPositivos ++;
    }else{
        promedio2 += numeros;
        contadorNegativos ++;
    }
    contador1 ++;
    contador2 ++;
    numeros = parseFloat(process.argv.slice(contador2))
}
console.log("El promedio de los numeros positivos es:",(promedio1/contadorPositivos),"El promedio de los numeros negativos es:",(promedio2/contadorNegativos))