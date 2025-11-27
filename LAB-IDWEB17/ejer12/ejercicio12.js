// Ejercicio 12

function procesarNumero(numero) {
    console.log("Numero procesado: "+numero);
}

function procesarLista(listaNumeros, callback12) {
    console.log("Cargando lista...");

    for (let i = 0; i<listaNumeros.length; i++) {
        setTimeout(() => {
            callback12(listaNumeros[i]);
        }, 1000*(i+1));
    }
    setTimeout(() => {
        console.log("Lista procesada exitosamente")
    }, 1000*listaNumeros.length);
}

const listaNumeros = [15, 12, 16, 3, 4, 6, 7, 2, 10];

const ejercicio12 = document.getElementById("ejercicio12");
ejercicio12.addEventListener("click", () => {
    procesarLista(listaNumeros, procesarNumero);
});