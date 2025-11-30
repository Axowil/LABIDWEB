//Ejercicio 8
const ejercicio8 = document.getElementById("ejercicio8");
// Agregamos una referencia al div donde se mostrarán los datos
const div7 = document.getElementById("div7"); 

ejercicio8.addEventListener("click", async () => {
    // Limpiamos el contenido anterior antes de agregar nuevo, si es necesario
    div7.innerHTML = ''; 

    const objeto2 = await cargarUsuario8();

    // Verificación de errores: si la función devolvió un error (aunque no es lo ideal)
    if (objeto2 instanceof Error) {
        div7.textContent = "Error al cargar los datos: " + objeto2.message;
        return;
    }

    const nuevoh2 = document.createElement("h2");
    nuevoh2.textContent = "Usuario: " + objeto2.name; // Usar el nombre real en el título
    
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
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1"); 
        if (!response.ok) { // Verifica si la respuesta HTTP fue exitosa (código 200-299)
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;

    } catch (error) {
        console.error("Hubo un problema con la operación fetch: ", error);
        return error;
    }
}