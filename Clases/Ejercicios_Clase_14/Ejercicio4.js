const matrices =   [[1,2,3],
                    [4,5,6],
                    [7,8,9]];

console.log(matrices[0].length)
for(let x = 0; x < matrices.length;x++){
    for(let y = 0; y < matrices[x].length;y++){
        console.log(matrices[x][y])
    }
}
