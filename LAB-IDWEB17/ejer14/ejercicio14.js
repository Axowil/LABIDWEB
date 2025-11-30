
const pedro = {
    nombre: "Pedro",
    id: 1
};

// Ejercicio 14
const ejercicio14 = document.getElementById("ejercicio14");
ejercicio14.addEventListener("click", () => {
    cargarUsuario14()
        .then(res => {console.log(res)})
        .catch(err => {console.log("ERROR: " + err)});
});

function cargarUsuario14() {
    console.log("Cargando Usuario...");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Nombre: " + pedro.nombre + "\tID: " + pedro.id);
        }, 1500);
    });
}