//Ejercicio 10

const btejercicio10 = document.getElementById("ejer10");
btejercicio10.addEventListener("click", () => {
    const primerP = document.querySelector("#ejercicio10 p");

    const nuevoh3 = document.createElement("h3");
    nuevoh3.textContent = "existente del documento";

    primerP.insertAdjacentElement("beforebegin", nuevoh3);
});
