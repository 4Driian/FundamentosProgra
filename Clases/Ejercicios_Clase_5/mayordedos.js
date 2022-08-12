//4. Desarrollo un programa en JavaScript que nos permita determinar el mayor de dos números, 
//siempre asumiendo que los dos números son distintos.

let n1 = parseFloat(process.argv.slice (2));
let n2 = parseFloat(process.argv.slice (3));

if(n1 > n2){
    console.log("El número",n1,"es el mayor");
}else{
    console.log("El número",n2, "es el mayor");
}