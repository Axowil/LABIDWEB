const procesarTexto = function (frase) {
    const limpitarEspacios = function (texto) {
        return texto.trim();
    }
    const contarPalabras = function (texto) {
        return texto.split(" ").length;
    }
    const fraseLimpia = limpitarEspacios(frase);
    const numeroPalabras = contarPalabras(fraseLimpia);
    return `La frase tiene ${numeroPalabras} palabras.`;
}

console.log(procesarTexto("Crea una función procesarTexto que tenga"+
    "una función interna limpiarEspacios y otra contarPalabras"));