const ejercicio1 = document.getElementById("ejercicio1");

ejercicio1.addEventListener("click", async () => { 
    let id;
    id = prompt(`Ingrese el id de pokemon`);
    try {
        const pokemonData = await cargarPokemonNombre(id);
        console.log("¡Datos del Pokémon obtenidos!");
        console.log(pokemonData);
        console.log(`Nombre: ${pokemonData.name}`); 

    } catch (error) {
        console.error("Ocurrió un error al buscar el Pokémon:", error.message);
    }
});

async function cargarPokemonNombre(id) {
    if (!id) {
        throw new Error("No se ingresó un ID de Pokémon.");
    }
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        if (!res.ok) {
            throw new Error(`Error en la solicitud: ${res.status} (${res.statusText})`);
        }
        const data = await res.json();
        return data;
    } catch (error) {
        throw error; 
    }
}
