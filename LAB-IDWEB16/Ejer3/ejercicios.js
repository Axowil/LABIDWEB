/*3. Cambiar contenido dinámicamente: crear un botón que al presionarlo cambie
el texto de un párrafo, de “Texto original” a “Texto cambiado”*/

const boton3 = document.getElementById("btnCambiar3");

const p3 = document.getElementById("parrafo3");

boton3.addEventListener("click", () => {
    p3.textContent = "Texto cambiado";
});