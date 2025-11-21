/*5. Manipular clases CSS: que un botón active/desactive una clase “oscuro”
en body para simular modo oscuro*/

const boton5 = document.getElementById("btnModoOscuro");

boton5.addEventListener("click", () => {
    document.body.classList.toggle("oscuro");
});