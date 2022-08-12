/*Se crean variables las cuales va a permitir que el usuario digite letras o números*/
let opcion = parseInt(process.argv.slice(2));
let posicion = process.argv.slice(3);
let carPrice = parseFloat(process.argv.slice(4))

/*Los siguientes son arreglos que contienen información y la cual más adelante le van a brindar la informacipon necesaria al usuario*/
let año = [2010, 2009, 2002, 2005, 2011, 2015, 2022, 2000, 2019, 1998, 1999, 2020, 2007, 2004, 2018, 2017, 2002, 2013, 2006, 2023 ]; 
let marca = ["Ford", "Honda", "Hyundai", "Isuzu", "Jaguar", "Jeep", "Kia", "Lexus", "Toyota", "Maserati", "Mazda", "Mercedez", "Mitsubishi", "Mini", "McLaren", "Nissan", "Peugeot", "Pagani", "Porsche", "Volvo"]; 
let modelo = ["Focus", "Civic", "Nexo", "DMax", "Xe", "Grand", "Carens", "LC", "Tercel", "brio", "CX", "AMG", "Lancer", "Mini3", "Senna", "Ariya", "iOn", "Zonda", "Boxter", "S60"]; 
let cantidad = [3, 5, 4, 5, 8, 7, 9, 12, 3, 1, 4, 7, 9, 6, 4, 2, 3, 4, 5, 4]; 
let precio = [1500, 8300, 7150, 11300, 18000, 17000, 17500, 16900, 15350, 12550, 13600, 40000, 100000, 61000, 55000, 38000, 700, 90999, 20000, 28999].sort((a,b)=>{return a- b}); 

/*Se procede a crear condiciones con funciones las cuales nos va a permitir insertar numeros del 1 al 5, si inserta numeros fuera de este rango 
dará error*/
if (opcion == 1){
    porPosicion()
} else if (opcion == 2){
    porMarca()
}else if (opcion == 3){
    porModelo()
}else if (opcion == 4){
    porPrecio(parseFloat(posicion))
}else if (opcion == 5){
    porAño(parseFloat(posicion))
}else{
    console.log("Opción inexistente");
}

/*Esta funcion define el número de arreglo existente y junto a ello la lista ordenada*/
function porPosicion(){
    parseInt(posicion)
    if(posicion >= 0 && posicion <= año.length){
        console.log("--------");
        console.log("Año del vehículo: ",año[posicion]);
        console.log("Marca del vehículo : ",marca[posicion]);
        console.log("Modelo del vehículo :",modelo[posicion]);
        console.log("Precio del vehículo",precio[posicion]);
        console.log("Cantidad disponible: ",cantidad[posicion]);
        console.log("--------");
    }
}


/*Esta funcion define el numero de arreglo y permite buscar el automovil por marca*/
function porMarca(){
    for(let x = 0; x < marca.length; x++){
        if(posicion == marca[x]){
            console.log("--------");
            console.log("Año del vehículo: ",año[x]);
            console.log("Marca del vehículo : ",marca[x]);
            console.log("Modelo del vehículo :",modelo[x]);
            console.log("Precio del vehículo",precio[x]);
            console.log("Cantidad disponible: ",cantidad[x]);
            console.log("--------");
        }
    }

/*Esta funcion define el numero de arreglo y permite buscar el automovil por modelo*/
}
function porModelo(){
    for(let x = 0; x < modelo.length; x++){
        if(posicion == modelo[x]){
            console.log("--------");
            console.log("Año del vehículo: ",año[x]);
            console.log("Marca del vehículo : ",marca[x]);
            console.log("Modelo del vehículo :",modelo[x]);
            console.log("Precio del vehículo",precio[x]);
            console.log("Cantidad disponible: ",cantidad[x]);
            console.log("--------");
        }
    }
}

/*Esta funcion define el numero de arreglo y permite buscar varios automoviles en un rango de precio dado*/
function porPrecio (entrar){
    for(let x = 0; x < precio.length; x++){
        if(precio[x] >= entrar && precio[x] <= carPrice){
            console.log("--------");
            console.log("Año del vehículo: ",año[x]);
            console.log("Marca del vehículo : ",marca[x]);
            console.log("Modelo del vehículo :",modelo[x]);
            console.log("Precio del vehículo",precio[x]);
            console.log("Cantidad disponible: ",cantidad[x]);
            console.log("--------");
        }
    }
}

/*Esta funcion define el numero de arreglo y permite buscar los vehiculos por año*/
function porAño (entrar){
    for(let x = 0; x < año.length; x++){
        if(año[x] == entrar){
            console.log("--------");
            console.log("Año del vehículo: ",año[x]);
            console.log("Marca del vehículo : ",marca[x]);
            console.log("Modelo del vehículo :",modelo[x]);
            console.log("Precio del vehículo",precio[x]);
            console.log("Cantidad disponible: ",cantidad[x]);
            console.log("--------");
        }
    }
}

/*Proyecto - Adrián Zúñiga Pérez*/