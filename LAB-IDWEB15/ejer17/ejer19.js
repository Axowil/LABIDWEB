//Ejercicio 19
const btejercicio19 = document.getElementById("ejer19");

btejercicio19.addEventListener("click", () => {
    const listaDivs = Array.from(document.querySelectorAll("div"));
    document.querySelector("#ejercicio19 p").textContent += listaDivs.length;  
});
