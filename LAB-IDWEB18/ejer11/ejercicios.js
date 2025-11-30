
// Ejercicio 11
const ejercicio10 = document.getElementById("ejercicio11");

ejercicio10.addEventListener("click", () => {
    console.log(validarContraseña("adsdsasa"));
    console.log(validarContraseña("awjklndaw1A"));
    console.log(validarContraseña("awdsbgfbbf"));
});

function validarContraseña(palabra) {
    return /^(?=.*[A-Z])(?=.*\d).{8,}$/.test(palabra);
}
