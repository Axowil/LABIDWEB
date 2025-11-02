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

const miacumulador = acumulador(10);
console.log(miacumulador.agregar(5)); 
console.log(miacumulador.restar(3));