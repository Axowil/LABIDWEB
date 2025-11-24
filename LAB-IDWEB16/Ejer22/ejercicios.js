
/*22. Simulador de perfil
• Crea un formulario con nombre, edad y país
• Al enviar, guarda los datos como JSON en localStorage
• Si el usuario recarga la página, muestra el perfil guardado en pantalla*/

const formulario22 = document.getElementById("formulario22");
const perfilGuardado = document.getElementById("perfilGuardado");

window.addEventListener("load", () => {
    const perfilJSON = localStorage.getItem("perfil");
    if (perfilJSON) {
        mostrarPerfil(JSON.parse(perfilJSON));
    }
});

formulario22.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const perfil = {
        nombre: document.getElementById("nombrePerfil").value,
        edad: document.getElementById("edadPerfil").value,
        pais: document.getElementById("paisPerfil").value
    };
    
    localStorage.setItem("perfil", JSON.stringify(perfil));
    mostrarPerfil(perfil);
    alert("Perfil guardado");
});

function mostrarPerfil(perfil) {
    perfilGuardado.innerHTML = `
        <div class="perfil-info">
            <h3>Perfil guardado:</h3>
            <p><strong>Nombre:</strong> ${perfil.nombre}</p>
            <p><strong>Edad:</strong> ${perfil.edad}</p>
            <p><strong>País:</strong> ${perfil.pais}</p>
        </div>
    `;
}