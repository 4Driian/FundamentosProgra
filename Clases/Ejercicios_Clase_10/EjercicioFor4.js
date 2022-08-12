/*Escriba un programa de JavaScript para sumar los múltiplos de 3 y 5 por debajo 
de 1000. Se puede usar el operador % (Residuo)*/ 

let suma = 0;
for(let i = 0; i< 1000; i++){    
    if (i % 3 == 0 || i % 5 == 0){
        suma =suma+  i;
    }
}
    console.log("La suma es",suma)
