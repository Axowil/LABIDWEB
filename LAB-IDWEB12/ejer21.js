function filtrarArreglo(arr, callback) {
    const resultado = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            resultado.push(arr[i]);
        }
    }
    
    return resultado;
}

// Ejemplos de uso:

const numeros = [1, 6, 3, 8, 4, 9, 2];
const mayoresQueCinco = filtrarArreglo(numeros, (num) => num > 5);
console.log(mayoresQueCinco); // [6, 8, 9]

