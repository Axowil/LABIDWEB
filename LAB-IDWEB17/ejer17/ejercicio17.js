//Ejercicio 17

const ejercicio17 = document.getElementById("ejercicio17");
ejercicio17.addEventListener("click", async() => {
    console.log("Iniciando Carga...");
    
    await new Promise(resolve => {
        setTimeout(() => {
            console.log("Mensaje Cargado");
        }, 1000);
    })

});
