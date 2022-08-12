const numeros = [3,23,12]; //3 12 23

//Si el resultado a - b = es negativo entonces a se ordena antes que b
//Si el resultado a -b = es positivo, b se ordena antes de a
//Si el resultado es 0, nada cambia
numeros.sort(function (a,b) { 
    console.log(a, " ", b, "= ",  a - b);
    return a - b
}); //ASC menor a mayor


const equipos = ["Bayer","Real", "Barcelona","Juventus","Boca"]
equipos.sort();
console.log(equipos)

const array = [1,2,3,4,5,6,7,8,9,10].reverse();
console.log("El arreglo de forma invertida es:",array);