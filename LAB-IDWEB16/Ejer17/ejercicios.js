/*17. Guarda un objeto JSON con datos de usuario (nombre, correo, rol) en localStorage.
Luego recupéralo y muéstralo en pantalla*/

const usuario = {
    nombre: "Willian Elmer",
    correo: "wapazacha@unsa.edu.pe",
    rol: "Estudiante"
};

localStorage.setItem("usuario", JSON.stringify(usuario));

const usuarioRecuperado = JSON.parse(localStorage.getItem("usuario"));

document.getElementById("Ejercicio17").innerHTML += `
    <div>
        <p><strong>Nombre:</strong> ${usuarioRecuperado.nombre}</p>
        <p><strong>Correo:</strong> ${usuarioRecuperado.correo}</p>
        <p><strong>Rol:</strong> ${usuarioRecuperado.rol}</p>
    </div>
`;
