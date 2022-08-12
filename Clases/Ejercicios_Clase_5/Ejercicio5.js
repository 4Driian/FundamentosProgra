//5. Desarrollo un programa en JavaScript que nos permita leer dos números entero y 
//muestre la división del primer número entre el segundo. Recordar que la división entre 0 da un error.
let n1 = parseFloat(process.argv.slice (2));
let n2 = parseFloat(process.argv.slice (3));
let division;

if(division != 0){ 
    division = n1 / n2;
    console.log("El resultado es:",division);
}else{
    console.log("NO SE PUEDE DIVIDIR ENTRE 0.");
}