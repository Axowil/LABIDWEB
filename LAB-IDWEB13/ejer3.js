
const arreglo = new Array(5);
for( let i=0; i<arreglo.length; i++){
    arreglo[i] = parseInt(prompt("Ingrese un numero "+(i+1)+": "));
}

const doblarNumeros = (arr) => {
    for(let i=0; i<arr.length; i++){
        arr[i] = arr[i] * 2;
    }
    return arr;
}
console.log("Arreglo original: " + arreglo);
const arregloDoblado = doblarNumeros(arreglo);
console.log("Arreglo Doblado " + arregloDoblado);
