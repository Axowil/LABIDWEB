// Ejercicio 7
const ejercicio7 = document.getElementById("ejercicio7");
const div7 = document.getElementById("div7");

ejercicio7.addEventListener("click", () => {
    cargarUsuario7().then(objeto2 => {
        const nuevoh2 = document.createElement("h2");
        nuevoh2.textContent = "Usuario 2";
    
        const nombre = document.createElement("p");
        nombre.textContent = "Nombre: " + objeto2.name;
    
        const email = document.createElement("p");
        email.textContent = "Email: " + objeto2.email;
    
        const ciudad = document.createElement("p");
        ciudad.textContent = "Ciudad: " + objeto2.address.city;
    
        div7.appendChild(nuevoh2);
        div7.appendChild(nombre);
        div7.appendChild(email);
        div7.appendChild(ciudad);
    })
    .catch(error => {
        console.log("Error: "+error);
    })
    
});

function cargarUsuario7() {
    return fetch("https://jsonplaceholder.typicode.com/users/2")
        .then(response => {
            return response.json();
        });
}
