function media(...numeros) {
    let promedio = 0;
    for (let numero of numeros) {
        promedio += numero;
    }
    return promedio/ numeros.length;
}

console.log(media(7, 2, 14, 15)); 
console.log(media(1, 2, 3));