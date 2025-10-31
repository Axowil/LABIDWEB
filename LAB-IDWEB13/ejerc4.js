const arreglo = new Array(5);

for (let i = 0; i < arreglo.length; i++) {
    arreglo[i] = parseInt(prompt(`Ingrese un numero ${i + 1}`));
}

const filtrarYTransformar = (array) => {
    let suma = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] >= 0) {
            suma += array[i] ** 2;
        }
    }
    return suma;
};

console.log("Arreglo Incial: " + arreglo);
const sumaTransformada = filtrarYTransformar(arreglo);
console.log("La suma de total de valores positivos al cuadrado " + sumaTransformada);
