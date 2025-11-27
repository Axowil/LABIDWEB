//Ejercicio 6
function validarEdad(edad) {
    if (edad>0) {
        return;
    }
    throw new Error("Edad invalida");
}

const ejercicio6 = document.getElementById("ejercicio6");
ejercicio6.addEventListener("click", () => {
    try {
        validarEdad(-23);
    } catch (error) {
        console.log(error);
    }
});