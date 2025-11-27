// Ejercicio 9

const cargarMensaje = (callback9) => {
    console.log("Iniciando Mensaje...");

    setTimeout(() => {
        callback9("Willian");
    }, 1000);

    console.log("Mensaje Intermedio");
}

const saludo = (nombre) => {
    console.log("Mensaje cargado");
    console.log("Hola "+nombre+"!");
};

const ejercicio9 = document.getElementById("ejercicio9");
ejercicio9.addEventListener("click", () => {
    cargarMensaje(saludo)}
);
