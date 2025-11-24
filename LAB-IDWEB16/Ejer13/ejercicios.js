/*13. Construir una pequeña interfaz CRUD (Crear, Leer, Actualizar y Eliminar)
• Formulario para añadir usuarios (nombre, edad)
• Tabla que muestra los usuarios agregados
• Botones de editar y eliminar por fila
• Usa querySelector, appendChild, dataset y event delegation*/

const formulario13 = document.getElementById("formulario13");
const inputNombre = document.getElementById("nombreUsuario");
const inputEdad = document.getElementById("edadUsuario");
const tbody = document.getElementById("tbodyUsuarios");
const btnAgregar13 = document.getElementById("btnAgregarUsuario");

let usuarios = [];
let editandoIndex = null;

formulario13.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const nombre = inputNombre.value.trim();
    const edad = inputEdad.value.trim();
    
    if (editandoIndex !== null) {
        usuarios[editandoIndex] = { nombre, edad };
        editandoIndex = null;
        btnAgregar13.textContent = "Agregar Usuario";
    } else {
        usuarios.push({ nombre, edad });
    }
    
    renderizarUsuarios();
    formulario13.reset();
});

function renderizarUsuarios() {
    tbody.innerHTML = "";
    
    usuarios.forEach((usuario, index) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${usuario.nombre}</td>
            <td>${usuario.edad}</td>
            <td>
                <button class="btnEditar" data-index="${index}">Editar</button>
                <button class="btnEliminar" data-index="${index}">Eliminar</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

tbody.addEventListener("click", (e) => {
    const index = e.target.dataset.index;
    
    if (e.target.classList.contains("btnEliminar")) {
        usuarios.splice(index, 1);
        renderizarUsuarios();
    }
    
    if (e.target.classList.contains("btnEditar")) {
        editandoIndex = index;
        inputNombre.value = usuarios[index].nombre;
        inputEdad.value = usuarios[index].edad;
        btnAgregar13.textContent = "Actualizar Usuario";
        inputNombre.focus();
    }
});
