//Ejercicio 8
const btejercicio8 = document.getElementById("ejer8");
btejercicio8.addEventListener("click", () => {
    const elementosDivDocumento = document.querySelectorAll("div");

    const colores = ["yellow", "red"];

    for (let index = 0; index < elementosDivDocumento.length; index++) {
        elementosDivDocumento[index].style.backgroundColor = colores[index%2];
    }
});