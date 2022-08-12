/* Escribir un programa que introduzca una calificación (A-F) y emita el mensaje
correspondiente de acuerdo con la nota ingresada:
A- Excelente
B- Buena
C- Regular
D- Suficiente
F- No Suficiente*/

let nota = process.argv.slice(2)

switch(String(nota)){
    case "A":
        console.log("La calificación es Excelente!");
        break;
    case "B":
        console.log("La calificación es Buena");
        break;
    case "C":
        console.log("La calificación es Regular");
        break;
    case "D":
        console.log("La calificación es Suficiente");
        break;
    case "F":
        console.log("La calificación NO es Suficiente");
        break;
    default:
        console.log("No existen más notas");
        break;
}