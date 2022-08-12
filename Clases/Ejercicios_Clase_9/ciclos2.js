//La tabla de multiplicar 3
/*
    Se incrementa la variable por la que vamos a multiplicar por 3
    Tabla del 3
    3 x 0 = 0
    3 x 1 = 3
    3 x 2 = 6
    3 x 3 = 9
    ...
    3 x 10 = 30
*/
let multiplicador = 3;
let multiplicando = 0;

while (multiplicando <= 10){
    let producto = multiplicador * multiplicando;
    console.log(multiplicador + " x " + multiplicando + " = " + producto);
    multiplicando = multiplicando + 1;
}
