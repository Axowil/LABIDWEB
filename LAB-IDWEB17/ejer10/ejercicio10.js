// Ejercicio 10
const Willian = {
    nombre: "Willian",
    id: "1"
};
const Johan = {
    nombre: "Johan",
    id: "2"
};

function cargarUsuario(callback1) {
    console.log("Cargando usuario...");
    setTimeout(() => {
        callback1(Willian);
        callback1(Johan);
    }, Math.floor((Math.random()*1500-800)+800));
}

function mostrarUsuario(objeto) {
    try {
        console.log("Usuario: "+objeto.nombre+"\tID: "+objeto.id);
    } catch (error) {
        console.log("Error al mostrar usuario: "+error);
    }
}

const ejercicio10 = document.getElementById("ejercicio10");
ejercicio10.addEventListener("click", () => {
    cargarUsuario(mostrarUsuario);
});