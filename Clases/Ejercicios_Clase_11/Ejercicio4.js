const nombres = []; //Todo entre parentesis cuadrados son arreglos
const argvNombres = process.argv.slice(2);

for(let i = 0; i < argvNombres.length; i++) {
    //nombres [i] = argvNombres[i];
    nombres.push(argvNombres[i]);
}

for(let i = 0; i < nombres.length; i++){
    console.log(argvNombres);
}
