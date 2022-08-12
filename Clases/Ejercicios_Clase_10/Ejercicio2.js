let n1 = parseInt(process.argv.slice(2));
let contadorPar = 0;
let contadorImpar = 0;

while(n1 != 0){
    if (n1 % 2 == 0){
        console.log("El númerp es par",n1)
        contadorPar = contadorPar +1
    }else{
    console.log("Los números son impares")
    contadorImpar = contadorImpar +1
    }
}
console.log("Cantidad de números pares",contadorPar,"Cantidad de números impares", contadorImpar);