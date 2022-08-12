let n = parseFloat(porcess.argv.slice(2))

if(n < 0){
    console.log("El número es negativo")
}else{
    if(n==0){
        console.log("El numero es 0")
    }else{
        console.log("El numero es positivo")
    }
}
