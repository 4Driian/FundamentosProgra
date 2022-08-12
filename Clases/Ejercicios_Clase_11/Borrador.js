const nombres = []; //Todo entre parentesis cuadrados son arreglos
const argvNombres = process.argv.slice(2); //Slice partir

for(let i = 0; i < argvNombres.length; i++) {
    //nombres[i] = argvNombres[i];
    nombres.push(argvNombres[i]);
}

for(let i = 0; i < nombres.length; i++){
    if(nombres[i] == "Juan"){
        console.log(`El nombre en el indice ${i} es ${nombres[i]}`);
    }
}

if(nombres[3] == "Pedro"){
    console.log("Si es igual a Pedro")
}else {
    console.log("No es igual a Pedro")
}
