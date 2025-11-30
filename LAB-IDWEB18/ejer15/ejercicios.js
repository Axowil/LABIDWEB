//Ejercicio 15

const ejercicio15 = document.getElementById("ejercicio15");
ejercicio15.addEventListener("click", () => {
    console.log(validarFecha("25/12/2025"));
    console.log(validarFecha("00/12/2025"));
    console.log(validarFecha("01/12/2025"));
});

function validarFecha(fecha) {
    const regex = /^(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    return regex.test(fecha);
}