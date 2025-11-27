//Ejercicio 7

const ejercicio7 = document.getElementById("ejercicio7");
ejercicio7.addEventListener("click", () => {
    const hombre = null;
    try {
        console.log(hombre.edad);
    }
    catch(error) {
        console.log(error);
    }
});
