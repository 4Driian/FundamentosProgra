//2. Desarrollo un programa en JavaScript que calcule el volumen de un cilindro dados su altura y diámetro.

//
let altura = 60;
let volumen;
let pi = 3.14;
let radio = 100;

//se crea un procedimiento el cual saca el volumen del cilindro,
//se utiliza Math. pow, la cual retorna la base elevada al exponente, es decir "radio al cuadrado" 
volumen = pi * Math.pow(radio,2) * altura;
console.log("El volumen es:", volumen);