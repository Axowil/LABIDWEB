//Ejercicio 22
const btejercicio22 = document.getElementById("btn22");
btejercicio22.addEventListener("click", () => {
    const section = document.getElementById("miSeccion");

    // 1. Eliminar el h2 original si existe
    const h2Original = section.querySelector("h2");
    if (h2Original) {
        h2Original.remove();
    }

    // 2. Crear el nuevo h2
    const nuevoH2 = document.createElement("h2");
    nuevoH2.textContent = "Título nuevo";

    // 3. Crear el párrafo
    const nuevoP = document.createElement("p");
    nuevoP.textContent = "Descripción generada";
        
    // 4. Crear la lista ul con 3 li
    const ul = document.createElement("ul");
    for (let i = 1; i <= 3; i++) {
        const li = document.createElement("li");
        li.textContent = `Ítem ${i}`;
        ul.appendChild(li);
    }
    // 5. Agregar todo a la sección
    section.appendChild(nuevoH2);
    section.appendChild(nuevoP);
    section.appendChild(ul);
});