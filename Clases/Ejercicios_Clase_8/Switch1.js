//switch = Siempre que tengo que evaluar si un valor es literalmente un dato.
//Por ejemplo: numero == 1 o numero==2


/* Desarrolle programa que permita ingresar el número cuyo valor representa un
día de la semana (Por ende, se ingresa un valor entre 1 y 7). Mostrar el nombre
del día, basado en el valor ingresado por usuario, ejemplo 1 = lunes, 2 = martes,
etc.*/

let dia = parseInt(process.argv.slice(2));


switch(dia){
    case 1:
        console.log("El día es Domingo");
        break;
    case 2:
        console.log("El día es Lunes");
        break;
    case 3:
        console.log("El día es Martes");
        break;
    case 4:
        console.log("El día es Miércoles");
        break;
    case 5:
        console.log("El día es Jueves");
        break;
    case 6:
        console.log("El día es Viernes");
        break;
    case 7:
        console.log("El día es Sábado");
        break;
    default:
        console.log("Solamente existen 7 dias!");
        break;
}
