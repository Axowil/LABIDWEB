// Ejercicio 11

function dividirAsync(a, b, callback11) {
    console.log("Cargando Division...");

    setTimeout(() => {
        if (b === 0) {
            callback11("No se puede dividir entre 0", null);
        }
        else {
            callback11(null, a/b);
        }
    }, 1500);
}

function division(observacion, numero) {
    if (observacion != null) {
        console.log(observacion);
    }
    else {
        console.log("Resultado Division: "+numero);
    }
}

const ejercicio11 = document.getElementById("ejercicio11");
ejercicio11.addEventListener("click", () => {
    dividirAsync(1, 20, division);
});

