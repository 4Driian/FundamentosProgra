//Ejercicio 2

let nota = parseFloat(process.argv.slice(2));

if (nota >= 70){
    console.log("Aprobó el curso con", nota);
} else if(nota >= 60 && nota <= 69){
    console.log("Tiene derecho a ir a convocatoria");
}else if(nota < 60){
    console.log("Reprobó el curso")
}
