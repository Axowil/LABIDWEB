// Ejercicio 3
const ejercicio3 = document.getElementById("ejercicio3");
ejercicio3.addEventListener("click", () => {
    try {
        
        console.log("Resultado: "+ dividirNumeros(2, 0));

    } catch (error) {
        console.log(error);
    }
});

const dividirNumeros = (numero1, numero2) => {
    if (numero2 === 0) {
        throw new Error("Division entree 0");
    }

    return numero1/numero2;
};

