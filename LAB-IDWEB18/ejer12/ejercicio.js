// Ejercicio 12
const ejercicio12 = document.getElementById("ejercicio12");

ejercicio12.addEventListener("click", () => {
    console.log(validarUrlSeguro("https://github.com/Axowil/LABIDWEB"));
    console.log(validarUrlSeguro("https://www.youtube.com/watch?v=J-WZG4xDO2g&list=RDJ-WZG4xDO2g&index=1"));
    console.log(validarUrlSeguro("https://www.facebook.com/"));
});

function validarUrlSeguro(url) {
    return /^(?=https)/.test(url);
}