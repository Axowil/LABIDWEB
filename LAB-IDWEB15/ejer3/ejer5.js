//Ejercicio 5
const btejercicio5 = document.getElementById("bej5");
btejercicio5.addEventListener("click", () => {
    const div5 = document.getElementById("ejercicio5");
    const primerImagen = div5.firstElementChild;

    primerImagen.setAttribute("src", "https://static.gosugamers.net/e7/b2/da/813fbd3e82dca62ea7948e0dd07842f73c883955535d1ec7ac731c6f7c.webp?w=1600");
    primerImagen.setAttribute("alt", "imagenDk");
});
