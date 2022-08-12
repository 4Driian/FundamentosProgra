/*El gimnasio SuperPower lo contrato para realizar un programa donde les permita calcular el IMC (índice de masa corporal)
de sus clientes, para luego indicar el diagnóstico el cliente en función de su IMC. Para esto el instructor ingresará el peso
y la altura de la persona.*/
/* Valor de IMC Diagnóstico
< 16 % Desnutrición grado 3
16 – 17% Desnutrición grado 2
17 - 18,5% Desnutrición grado 1
18,5 – 25 % Normal
25-30% Sobre peso grado 1
30-40% Sobre peso grado 2
>40% Sobre peso grado 3 */


let peso = parseFloat(process.argv.slice(2));
let altura = parseFloat(process.argv.slice(3));
let imc = peso / Math.pow(altura,2);

if(imc < 16){
    console.log("El cliente tiene un diágnostico de Desnutrición grado 3");
}else if(imc > 16 && imc < 17){
    console.log("El cliente tiene un diágnostico de Desnutrición grado 2");
}else if(imc > 17 && imc < 18.5){
    console.log("El cliente tiene un diágnostico de Desnutrición grado 1");
}else if(imc >18.5 && imc < 25){
    console.log("El cliente tiene un diágnostico de peso normal");
}else if(imc > 25 && imc < 30){
    console.log("El cliente tiene un diágnostico de Sobre peso grado 1");
}else if(imc > 30 && imc < 40){
    console.log("El cliente tiene un diágnostico de Sobre peso grado 2");
}else if(imc > 40){
    console.log("El cliente tiene un diágnostico de Sobre peso grado 3");
}


