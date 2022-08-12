/* Escriba un programa en Python, que solicite tres números, el
programa debe devolver el número del centro.  
a. Por ejemplo: 

El   usuario   ingresa   los   números:   15,   55,   25,   el
programa debe indicar que el número del centro es 25

El   usuario   ingresa   los   números:   15,   20,   25,   el
programa debe indicar que el número del centro es 20

El   usuario   ingresa   los   números:   22,   20,   25,   el
programa debe indicar que el número del centro es 22
*/

//comparar entre los 3 cual es mayor y menor, depende del que salga es el que sobra

let n1 = parseInt(process.argv.slice(2));
let n2 = parseInt(process.argv.slice(3));
let n3 = parseInt(process.argv.slice(4));

if((n1 > n2 && n1 < n3 ) || (n1 < n2 && n1 > n3 )){ 
    console.log("El número del centro es", n1);
}else if((n2 > n1 && n2 < n3 ) || (n2 < n1 && n2 > n3 )){
    console.log("El número del centro es", n2)
}else if((n3 > n1 && n3 < n2 ) || (n3 < n1 && n3 > n2 )){
    console.log("El número del centro es", n3)
}