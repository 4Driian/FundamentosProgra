/* Escriba un programa de JavaScript que itere los números enteros del 1 al 100. 
Pero para los múltiplos de tres, escriba "Fizz" en lugar del número y para los 
múltiplos de cinco, escriba "Buzz". Para números que son múltiplos de tres y 
cinco, escriba "FizzBuzz". */

for(let i = 1; i<= 100; i++){    /*Contador de 1 al 100 */
    if (i % 3 == 0 && i % 5 == 0){
        console.log("FizzBuzz",i,)
    }else if(i % 3 == 0){
    console.log("Fizz",i,)
    }else if(i % 5 == 0){
        console.log("Buzz",i)
    }else{
        console.log(i)
    }
}
console.log("El programa terminó")