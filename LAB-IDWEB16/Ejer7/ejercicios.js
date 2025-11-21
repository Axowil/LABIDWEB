/*7. Agregar y eliminar elementos de una lista: permitir al usuario ingresar texto en un
<input> y añadirlo como <li> dentro de
una lista. Incluir un botón para borrar el último elemento*/

const inputLista = document.getElementById("inputLista");
const btnAgregar = document.getElementById("btnAgregar");
const btnEliminar = document.getElementById("btnEliminar");
const lista7 = document.getElementById("lista7");

btnAgregar.addEventListener("click", () => {
    const texto = inputLista.value.trim();
    if (texto) {
        lista7.innerHTML += `<li>${texto}</li>`;
        inputLista.value = "";
    }
});

btnEliminar.addEventListener("click", () => {
    if (lista7.lastElementChild) {
        lista7.lastElementChild.remove();
    }
});