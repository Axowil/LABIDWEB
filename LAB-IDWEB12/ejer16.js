function acumulador(valorInicial) {
    let valor = valorInicial;

    function agregar(numero) {
        return valor+numero;
    }
    function restar(numero) {
        return valor-numero;
    }

    return {
        agregar,
        restar
    }
}

const acumulador = acumulador(12);
console.log(acumulador.agregar(5)); 
console.log(acumulador.restar(3));