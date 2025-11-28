// Ejercicio 5
const ejercicio5 = document.getElementById("ejercicio5");
ejercicio5.addEventListener("click", () => {
    consultarUsuarios();
});
async function consultarUsuarios() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();

        for (const usuario of data) {
            console.log("Nombre: "+usuario.name);
        }
    } catch (error) {
        console.log("Error: "+error);
    }
}