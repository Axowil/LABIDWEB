// Ejercicio 20

const listaNumeros = [1, 2, 3, 4, 5];

function esperar(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function procesarLista(listaNumeros) {
    for (const numero of listaNumeros) {
        const tiempo = Math.floor(Math.random() * 1000) + 500; 
        await esperar(tiempo);

        console.log(`Procesando ${numero}...`);
    }

    return "Proceso completado";
}

const ejercicio20 = document.getElementById("ejercicio20");
ejercicio20.addEventListener("click", async() => {
    console.log("Iniciando proceso...");
    const mensaje = await procesarLista(listaNumeros);
    console.log(mensaje);
});
