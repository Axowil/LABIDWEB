/*8. Validar formulario con DOM: validar que los campos “nombre” y “correo” no estén
vacíos. Si hay error, mostrar mensajes
debajo del input usando createElement("span") con estilo rojo*/

const formulario8 = document.getElementById("formulario8");

formulario8.addEventListener("submit", (e) => {
    e.preventDefault();
    formulario8.querySelectorAll(".error").forEach(e => e.remove());
    
    const nombre = document.getElementById("nombre8");
    const correo = document.getElementById("correo8");
    let valido = true;
    
    if (!nombre.value.trim()) {
        valido = false;
        const span = document.createElement("span");
        span.textContent = "El nombre es obligatorio";
        span.className = "error";
        nombre.parentElement.appendChild(span);
    }
    
    if (!correo.value.trim()) {
        valido = false;
        const span = document.createElement("span");
        span.textContent = "El correo es obligatorio";
        span.className = "error";
        correo.parentElement.appendChild(span);
    }
    
    if (valido) {
        alert("Formulario válido");
        formulario8.reset();
    }
});