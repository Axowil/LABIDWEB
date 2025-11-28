
// Ejercicio 3
const ejercicio3 = document.getElementById("ejercicio3");
ejercicio3.addEventListener("click", () => {
    cargarUsuario3();
});

const cargarUsuario = ()  => {
    fetch("https://jsonplaceholder.typicode.com/users/10")
        .then(response => response.json())
        .then(dato => {
            console.log("Name: "+dato.name);
            console.log("Username: "+dato.username);
            console.log("Email: "+dato.email);
        })
        .catch(error => console.log(error.message))
}
cargarUsuario();
