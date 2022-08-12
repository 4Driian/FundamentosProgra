/*Desarrolle un programa que alamcene las
siguientes frutas en un arreglo: Manzana, Pera, Uva,
Sandía, Banano, Melocoton, Piña, Maracuyá, 
Mandarina, Mango, y determine:
a. Si la fruta fresa se encuentra en el arreglo, mostrar un mensaje al usuario
b. Si la fruta Uva se encuentra en el arreglo, mostrar un mensaje al usuario*/

let frutas = ["Pera","Manzana","Uva","Sandía","Banano","Melocotón","Piña","Maracuyá","Mandarina","Mango"];
let fruta = process.argv.slice(2);
let bool = 0;

for (let i = 0; i < frutas.length; i++) {
    if(frutas [i] == fruta) {
        bool = 1;
    }
}
if(bool == 1) {
    console.log("La fruta",fruta,"Si se encuentra en el arreglo Frutas",frutas)
}else{
    console.log("La fruta",fruta,"No se encuentra en el arreglo Frutas",frutas)
}