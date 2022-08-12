// Adrián Zúñiga Pérez
let turno = parseInt(process.argv.slice(2))
let categoria = parseInt(process.argv.slice(3))
let salario = parseInt(process.argv.slice(4))

if(turno == 1){
    console.log("Mañana")
}else if(turno == 2){
    console.log("Tarde")
}else if(turno == 3){
    console.log("Noche")
}else{
    console.log("No hay más turnos.")
}

if((categoria == 1) || (salario <= 350000)){
    console.log("Associate")
}else if(categoria == 2){
    console.log("Senior")
}else{
    console.log("No hay más categorías.")
}
