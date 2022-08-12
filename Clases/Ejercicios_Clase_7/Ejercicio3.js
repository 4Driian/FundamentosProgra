//Ejercicio 3

let a = parseFloat(process.argv.slice(2));
let b = parseFloat(process.argv.slice(3));
let c = parseFloat(process.argv.slice(4));

if(a > b && a > c){
    console.log("El valor", a ,"es mayor")
}else if(b > a && b > c){
    console.log("El valor", b ,"es mayor")
}else if(c > b && c > a){
    console.log("El valor", c ,"es mayor")
}