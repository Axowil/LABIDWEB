/*6. Contador interactivo: crear botones “+”, “−” y un span que muestre el
valor actual (empezar en 0)
Evita que el contador baje de cero y mostrar mensaje*/

const btnMenos = document.getElementById("btnMenos");
const btnMas = document.getElementById("btnMas");
const spanContador = document.getElementById("contador");
const mensajeContador = document.getElementById("mensajeContador");

btnMenos.addEventListener("click", () => {
    let valor = parseInt(spanContador.textContent);
    if (valor > 0) {
        spanContador.textContent = --valor;
        mensajeContador.textContent = "";
    } else {
        mensajeContador.textContent = "El contador no puede ser negativo";
    }
});