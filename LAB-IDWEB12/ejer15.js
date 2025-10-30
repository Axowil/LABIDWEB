
function crearContador(valorInicial) {
    let contador = valorInicial;

    function incrementar() {
        contador++;
        return contador;
    }

    function resetear() {
        contador = valorInicial;
        return contador;
    }

    return {
        incrementar,
        resetear
    };
}

// Ejemplo de uso:
const contador = crearContador(5);
console.log(contador.incrementar()); //