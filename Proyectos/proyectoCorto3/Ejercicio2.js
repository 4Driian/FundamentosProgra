/*Desarrolle un programa que lea la altura de 8 personas (estas
alturas deben guardarse en un arreglo) y calcule la media de
las alturas*/

let numeros = parseFloat(process.argv.slice(2));
let arr = [];
let contador1 = 0;
let contador2 =2;
let promedio = 0;

while (contador1 < 8){
    arr [contador1] = numeros;
    promedio += numeros;
    contador1 ++;
    contador2 ++;
    numeros = parseFloat(process.argv.slice(contador2));
}
console.log("Las alturas son:",arr,"El promedio de todas las alturas es:",(promedio/contador1));