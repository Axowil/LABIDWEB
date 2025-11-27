//Ejercicio 4

const ejercicio4 = document.getElementById("ejercicio4");
ejercicio4.addEventListener("click", () => {
    try {
        const parseJson1 =  JSON.parse("wwwwwwwww");
        console.log("Nombre: "+parseJson1.nombre);

    } catch (error) {
        if (error instanceof SyntaxError) {
            console.log("Error al momento de parsear");
        }
        else if (error instanceof TypeError) {
            console.log("Dato no tiene la estructura esperada");
        }
        else {
            console.log("Error general: "+error);
        }
    }
});
