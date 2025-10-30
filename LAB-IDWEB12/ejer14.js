function OperacionesMatematicas(operacion) {
    const sumar = (a, b) => a + b;
    const restar = (a, b) => a - b;
    const multiplicar = (a, b) => a * b;
    const dividir = (a, b) => a / b;

    switch (operacion) {
        case 'sumar':
            return sumar;
        case 'restar':
            return restar;
        case 'multiplicar':
            return multiplicar;
        case 'dividir':
            return dividir;
        default:
            return null;
    }
}

const operacionSuma = OperacionesMatematicas('sumar');
console.log(operacionSuma(5, 3)); 

const operacionMultiplicacion = OperacionesMatematicas('multiplicar');
console.log(operacionMultiplicacion(5, 3)); 