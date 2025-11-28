// Ejercicio 6
const ejercicio6 = document.getElementById("ejercicio6");
ejercicio6.addEventListener("click", () => {
    cargarUsuariospromesas();
})
function cargarUsuariospromesas() {
    fetch("https://jsonplaceholder.typicode.com/users") 
        .then(response => {return response.json()})
        .then(data => {
            for (const usuario of data) {
                console.log("Nombre: " + usuario.name);
            }
        })
        .catch(error => {
            console.log("Error producido: " + error);
        })
}
