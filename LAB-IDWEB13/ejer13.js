function combinarCatalogos(tiendaA, tiendaB) {
    const resultado = {};

    for (let producto in tiendaA) {
        resultado[producto] = tiendaA[producto];
    }

    for (let producto in tiendaB) {
        if (resultado[producto] !== undefined) {
            resultado[producto] = Math.min(resultado[producto], tiendaB[producto]);
        } else {
            resultado[producto] = tiendaB[producto];
        }
    }

    for (let producto in resultado) {
        resultado[producto] = Number(resultado[producto].toFixed(2));
    }

    return resultado;
}

const tiendaA = {
    laptop: 3500.5,
    mouse: 100.35,
    teclado: 250.9
}

const tiendaB = {
    mouse: 95.2,
    monitor: 720.457,
    teclado: 260.1
}

console.log(combinarCatalogos(tiendaA, tiendaB));