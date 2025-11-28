
//Ejercicio 8
const ejercicio8 = document.getElementById("ejercicio8");
ejercicio8.addEventListener("click", async () => {
    const objeto2 = await cargarUsuario8();

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
});
async function cargarUsuario8() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/2");
        const data = await response.json();
        return data;

    } catch (error) {
        return error;
    }
}


