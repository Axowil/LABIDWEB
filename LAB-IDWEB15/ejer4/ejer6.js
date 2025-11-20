//Ejercicio 6

const btejercicio6 = document.getElementById("bej6");
btejercicio6.addEventListener("click", () => {
    const elementosLi = document.querySelectorAll("#ejercicio6 ul li");
    
    for (const element of elementosLi) {
        element.classList.add("resaltado");
        
        if (element.classList.contains("oculto")) {
            element.classList.remove("oculto");
        }
    }
});