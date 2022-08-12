//1. Desarrollo un programa en JavaScript que dado tres números cuales quiera 
//   calcule el promedio de esos tres números.

//Se crean las variables y se les da un valor.
let n1 = 25;
let n2 = 50;
let n3 = 75;

//se crean las varibles suma y promedio que nos van a ayudar a diferenciar los procedimientos.
let suma;
let promedio;

//Se crea un pequeño programa que nos ayuda a sumar todas las variables.
suma = n1 + n2 + n3;

//A la variable promedio le vamos a dar el valor del resultado entre la suma de los tres numeros dividido entre 3.
promedio = suma/3;
console.log("El promedio es:",promedio);