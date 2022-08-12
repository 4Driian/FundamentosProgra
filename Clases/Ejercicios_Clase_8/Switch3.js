/*Escribir un programa que introduzca un mes (1-12) y visualice el número de
días de ese mes. Por ejemplo, si el usuario ingresa 1 corresponde a enero y
tiene 31 días, si el usuario digita 2 corresponde a Febrero y tiene 28 días, si el
usuario digita 3 corresponde a marzo y tiene 30 días. */

let mes = parseInt(process.argv.slice(2));

switch(mes){
    case 1:
        console.log("1 corresponde a Enero y tiene 31 días");
        break;
    case 2:
        console.log("2 Corresponde a Febrero y tiene 28 días");
        break;
    case 3:
        console.log("3 Corresponde a Marzo y tiene 31 días ");
        break;
    case 4:
        console.log("4 Corresponde a Abril y tiene 30 días");
        break;
    case 5:
        console.log("5 Corresponde a Mayo y tiene 31 días");
        break;
    case 6:
        console.log("6 Corresponde a Junio y tiene 30 días");
        break;
    case 7:
        console.log("7 Corresponde a Julio y tiene 31 días");
        break;
    case 8:
        console.log("8 Corresponde a Agosto y tiene 31 días");
        break;
    case 9:
        console.log("9 Corresponde a Septiembre y tiene 30 días");
        break;
    case 10:
        console.log("10 Corresponde a Octubre y tiene 31 días");
        break;
    case 11:
        console.log("11 Corresponde a Noviembre y tiene 30 días");
        break;
    case 12:
        console.log("12 Corresponde a Diciembre y tiene 31 días");
        break;
    default:
        console.log("Solamente existen 12 Meses!");
        break;
}
