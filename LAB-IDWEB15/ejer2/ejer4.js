//Ejercicio 4

const btejercicio4 = document.getElementById("bej4");
btejercicio4.addEventListener("click", () => {
    
    const parrafos = document.querySelectorAll("#ejercicio4 p");

    for (const element of parrafos) {
        element.textContent = "Texto actualizado dinámicamente";
    }
});