//Ejercicio 4

let grados = parseFloat(process.argv.slice(2));

if(grados <= 10){
    console.log("Hace mucho frío");
}else if(grados >= 10 && grados <= 15){
    console.log("Hace poco frío")
}else if(grados >= 16 && grados <= 24){
    console.log("Hace una temperatura normal")
}else if(grados >= 25 && grados <= 30){
    console.log("Hace poco calor")
}else{
    console.log("Hacer mucho calor")
}