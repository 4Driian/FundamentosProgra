//argv: argumentos por parametro
//process: un proceso de note
//slice: parte el arreglo en pequeñas partes y solo extraer el importante
//parseFloat es para pasar de string a número

let n1 = parseFloat(process.argv.slice (2));
let n2 = parseFloat(process.argv.slice (3));
let n3 = parseFloat(process.argv.slice (4));

let resultadoSuma = n1 + n2 + n3;
console.log(resultadoSuma);