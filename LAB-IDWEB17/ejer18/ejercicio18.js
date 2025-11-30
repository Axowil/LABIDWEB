// Ejercicio 18

const pedro = {
    nombre: "Pedro",
    id: 1
};

const ejercicio18 = document.getElementById("ejercicio18");
ejercicio18.addEventListener("click", async() => {
    console.log("Cargando contenido...")
    await new Promise(resolve => {
        setTimeout(() => {
            console.log("Nombre: "+pedro.nombre +"\tID: "+pedro.id);
        }, Math.random() * (1200 - 800) + 800);
    });
});