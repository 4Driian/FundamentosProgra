/*A usted lo (la) contrataron para desarrollar un juego
en JavaScript, el programa solicitará el valor de tres
dados que han sido lanzados, y dependiendo del
valor de los dados el juego deberá determinar el
estado del juego*/ 
/*Si los tres dados tienen un 6 cuando fueron
lanzados, entonces el juego fue excelente.
• Si al menos dos de los dados tienen un 6
entonces el juego fue muy bueno.
• Si al menos uno de los dados tiene un 6
entonces el juego fue regular.
Si ninguno de los dados tiene un 6 entonces el juego fue pésimo.
• Notas: Los dados solo pueden tener valores del 1 al 6*/ 

let dado1 = parseInt(process.argv.slice(2));
let dado2 = parseInt(process.argv.slice(3));
let dado3 = parseInt(process.argv.slice(4));

if(dado1 == 6 && dado2 == 6 && dado3 == 6){
    console.log("El juego fue excelente")
}else if((dado1 == 6 && dado2 == 6) || (dado1 == 6 && dado3 == 6) || (dado2 == 6 && dado3 == 6)){
    console.log("El juego fue muy bueno")
}else if((dado1 == 6) || (dado2 == 6) || (dado3 ==6)){
    console.log("El juego fue regular")
}else{
    console.log("El juego fue pésimo")
}