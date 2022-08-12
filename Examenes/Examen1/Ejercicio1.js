// Adrián Zúñiga Pérez
let opcion = parseInt(process.argv.slice(2))
let n1 = parseInt(process.argv.slice(3))
let n2 = parseInt(process.argv.slice(4))
let suma;
let resta;
let multiplicacion;
let residuo;
let division;

if(opcion == 1){
    suma = n1 + n2
    console.log("El resultado de la suma es", suma)
}else if(opcion == 2){
    resta = n1 - n2
    console.log("El resultado de la resta es", resta)
}else if(opcion == 3){
    multiplicacion = n1 * n2
    console.log("El resultado de la multiplicacion es", multiplicacion)
}else if(opcion == 4){
    division = n1 / n2
    console.log("El resultado de la división es", division)
}else if(opcion == 5){
    residuo = n1 % n2
    console.log("El resultado de la residuo es", residuo)
}else{
    console.log("Operación no válida")
}
