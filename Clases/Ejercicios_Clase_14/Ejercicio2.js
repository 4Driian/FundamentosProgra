function imprimir_mayor(){
    let n1 = parseInt(process.argv.slice(2))
    let n2 = parseInt(process.argv.slice(3))

    if(n1 < n2){
        console.log("El mayor es ",n2)
    }else if(n1 > n2){
        console.log("El mayor es ",n1)
    }else{
        console.log("Son iguales")
    }
}
imprimir_mayor();