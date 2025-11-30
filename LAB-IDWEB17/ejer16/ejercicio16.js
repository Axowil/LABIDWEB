// Ejercicio 16

const ejercicio16 = document.getElementById("ejercicio16");
ejercicio16.addEventListener("click", () => {
    procesarLista(listaNumeros16)
    .then(mensaje => {
        console.log(mensaje);
    });
    
});

function procesarLista(lista) {
    const promesas = lista.map(numero => {
        return new Promise(resolve => {
            const tiempo = Math.random() * (1500 - 500) + 500;

            setTimeout(() => {
                console.log("Procesando " + numero + "...");
                resolve();
            }, tiempo);
        });
    });

    return Promise.all(promesas).then(() => {
        return "Proceso completado";
    });
}

const listaNumeros16 = [12, 143, 14, 1, 2, 6, 7, 1, 10];

