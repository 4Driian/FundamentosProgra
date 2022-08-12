//5. Desarrollo un programa en JavaScript que nos permita leer dos números entero y 
//muestre la división del primer número entre el segundo. Recordar que la división entre 0 da un error.
let n1 = 0;
let n2 = 5;
let division;

division = n1 / n2;

//la condicion "Desigualdad" "!=" comprueba si sus dos operandos no son iguales y devuelve un resultado booleano.
//Si el numero se divide entre 0 imprime error, de caso contrario realiza la operación.
if(division != 0){
    console.log("El resultado es:",division);
}else{
    console.log("NO SE PUEDE DIVIDIR ENTRE 0.");
}
