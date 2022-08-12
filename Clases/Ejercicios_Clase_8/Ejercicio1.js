//Escriba un programa que pida tres números y que escriba si son
//los tres iguales, si hay dos iguales o si son los tres distintos. 

let n1 = parseFloat(process.argv.slice(2));
let n2 = parseFloat(process.argv.slice(3));
let n3 = parseFloat(process.argv.slice(4));

if(n1 == n2 && n1 == n3 && n2 == n3){             //"&&" tiene que cumplirse toda la condicion completa
    console.log("Estos valores son iguales")  
}else if(n1 != n2 && n1 != n3 && n2 != n3){       // "!=" se cumple la condicion completa si los valores son distintos
    console.log("Estos valores son distintos")
}else{
    console.log("Hay dos valores iguales")
}