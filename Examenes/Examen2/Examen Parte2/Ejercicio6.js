let array = [4, 2, 34, 4, 1, 12, 1, 4];
let array2 = [];
let array3 = [];
let con = 0;

for (let i = 0; i < array.length; i++) {
if (array2.includes(array[i])) {
    for (let x = 0; x < array3.length; x++) {
    if (array[i] == array3[x]) {
        con = 1;
    }
    }
    if (con == 0) {
    array3.push(array[i]);
    }
} else {
    array2.push(array[i]);
}
}
console.log(array3);
