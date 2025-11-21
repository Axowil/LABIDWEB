/*4. Anterior ejercicio, pero que al volver a hacer click vuelva al texto
anterior (alternadamente)*/

const boton4 = document.getElementById("btnAlternar4");
const p4 = document.getElementById("parrafo4");

boton4.addEventListener("click", () => {
    p4.textContent = p4.textContent === "Texto original" 
        ? "Texto cambiado" 
        : "Texto original";
});
