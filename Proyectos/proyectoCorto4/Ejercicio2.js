/*Desarrolle un programa que suma la diagonal de la siguiente matriz, los valores 
de la matriz son: [[10,20,30],[40,50,60],[70,80,90]]  
a. Suma sería = 10 + 50 + 90 = 150 */

let arr, sumDig;
sumDig = 0;

arr = [
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90],
]

for (let i = 0; i < 3; i++ ) {
    sumDig = sumDig + arr[i][i];
}
console.log(sumDig)