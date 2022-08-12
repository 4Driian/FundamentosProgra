// Adrián Zúñiga Pérez
let cuenta = parseInt(process.argv.slice(2))
let edad = parseInt(process.argv.slice(3))

if(cuenta == 1 && edad > 23){
    console.log("Tipo de cuenta: Corriente")
    console.log("Aplica para tarjeta de crédito")
}else if(cuenta == 2 && edad > 25){
    console.log("Tipo de cuenta: Ahorro")
    console.log("Aplica para tarjeta de crédito")
}else{
    console.log("No aplica para tarjeta de crédito")
}