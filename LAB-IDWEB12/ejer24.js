function crearSecuenciaAritmetica(inicio, paso) {
    let valorActual = inicio;
    
    return function() {
        let resultado = valorActual;
        valorActual += paso;
        return resultado;
    };
}

const secuencia = crearSecuenciaAritmetica(2, 5);
console.log(secuencia()); // 5
console.log(secuencia()); // 8
console.log(secuencia()); // 11
console.log(secuencia()); // 14

