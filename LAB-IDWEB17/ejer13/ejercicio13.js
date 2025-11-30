// Ejercicio 13
function ejercicio13() {
    console.log("Cargando Mensaje...");

    return new Promise((resolve, reject) =>{ 
        setTimeout(() => {
            const fallo = false;
            
            if (fallo) {
                reject("Mensaje de error");
            }
            else {
                resolve("Mensaje Cargado");
            }
        }, 1000);
    });
}

const ejercicio13btn = document.getElementById("ejercicio13");

ejercicio13btn.addEventListener("click", () => {
    ejercicio13()
        .then(resultado => {
            console.log("Promesa recibida: ", resultado);
        })
        .catch(error => {
            console.log("Error: ", error);
        });
});