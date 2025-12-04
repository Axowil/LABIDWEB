const ejercicio4 = document.getElementById("ejercicio4");
ejercicio4.addEventListener("click", async() => {
    try {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon/charizard");

        if (!res.ok) {
            throw new Error("Error en la solicitud: " + res);
        }

        const data = await res.json();

        console.log("URL imagen: " + data.sprites.front_default);

    } catch (error) {
        console.log(error);
    }
});