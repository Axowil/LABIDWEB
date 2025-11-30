// Ejercicio 19

const ejercicio19 = document.getElementById("ejercicio19");
ejercicio19.addEventListener("click", async() => {
    console.log("Cargando Resultado...");
    try {
        const resultado = await dividirAsync(12, 0);
        console.log("Resultado: " + resultado);
    } catch (err) {
        console.log("ERROR: " + err.message);
    }
});

async function dividirAsync(a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (b === 0) {
                reject(new Error("No se puede dividir entre cero"));
            } else {
                resolve(a / b);
            }
        }, 1500);
    });
}