function contarPalabras(texto) {
    const repetidos = new Map();
    const palabras = texto.toLowerCase().split(" ");
    for (const palabra of palabras) {
        repetidos.set(palabra, (repetidos.get(palabra) || 0) + 1);
    }
    return repetidos;
}

console.log(contarPalabras("La luz brilla mas cuanto estas soltero"));