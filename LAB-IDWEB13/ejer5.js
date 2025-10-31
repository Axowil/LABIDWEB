const reordenarPalabras = (frase) => {
    return frase
        .split(' ')
        .map(palabra => palabra.toUpperCase())
        .sort();
}
console.log(reordenarPalabras("Hola cracks me llamo Will"));