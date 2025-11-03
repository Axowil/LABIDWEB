function contarLetras(texto) {
    const conteo = {};
    const letras = texto.toLowerCase();

    for (const letra of letras) {
        conteo[letra] = (conteo[letra] || 0) + 1;
    }

    return conteo;
}

console.log(contarLetras("dinosaurio"));