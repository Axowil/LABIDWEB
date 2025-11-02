function crearSecuenciaAritmetica(inicio, paso) {
    let valorActual = inicio;
    
    return function() {
        let resultado = valorActual;
        valorActual += paso;
        return resultado;
    };
}

const secuencia = crearSecuenciaAritmetica(2, 5);
console.log(secuencia()); // 2
console.log(secuencia()); // 7
console.log(secuencia()); // 12
console.log(secuencia()); // 17

