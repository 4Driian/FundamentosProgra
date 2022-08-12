//8. Desarrollo un programa en JavaScript que nos permita leer un número entero y determiné si es un número terminado en 4.

//Se crean dos varibles a las cuales se les da un valor.

//Se crea una operación que la variable "respuesta" se utiliza para dividir dos números y devolver el resto
//y determina si el numero termina en 4
let n1 = 60;
let respuesta = n1 % 10;

//Si la condicion se cumple es porque es termiando en 4.
if(respuesta==4){
    console.log("El número",n1,"termina en 4");
}else{
    console.log("El número NO termina en 4");
}