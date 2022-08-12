let angulo1 = parseFloat(process.argv.slice(2));
let angulo2 = parseFloat(process.argv.slice(3));
let angulo3 = parseFloat(process.argv.slice(4));

const sumaAngulos = angulo1 + angulo2 + angulo3;

if (sumaAngulos == 180){
    console.log("Si es un triangulo valido");
}else{
    console.log("No es un triangulo valido");
}