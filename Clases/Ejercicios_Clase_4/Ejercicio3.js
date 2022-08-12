//3. Desarrollo un programa en JavaScript que calcule la pendiente de una recta que pasa por dos puntos.

//Se les da un valor a las variables las cuales utiliza las rectas "x, y".
let punto_A = [-10,8];
let punto_B = [5,-6];
let pendiente = 0;

/*Se crea un procedimieto que utiliza el ciclo "for" el cual tiene que cumplir la condición de los dos puntos.
Se crea una varible con pendiente el cual almacena el resultado de la operación.
y2-y1 entre x2-x1 */
for(let i = 0; i <= punto_A.length && i <= punto_B.length; i++){
    pendiente = (punto_B[1] - punto_A[1]) / (punto_B[0] - punto_A[0]);
}
console.log("El resultado de la pendiente es:", pendiente);