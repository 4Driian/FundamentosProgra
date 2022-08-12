/*RETURN: Indica que la funcion va adevolver algo
funcion: puede recibit tantos parametros sean necesarios */

function mayor_numeros (num1,num2){
    if (num1<num2) {
        return num2;
    }else if (num1 > num2){
        return num1;
    }else
    return 0;
    //Liena 9 ya a partir de aquí nada de lo que este se ejecuta
    console.log("Última línea");
}

const mayor = mayor_numeros(1,3);
if(mayor!=0){
console.log("El valor mayor es:", mayor);
} else{
    console.log("Son iguales")
}
