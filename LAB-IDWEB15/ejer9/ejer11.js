const btejercicio11 = document.getElementById("ejer11");
btejercicio11.addEventListener("click", () => {
    const div = document.getElementById("ejercicio11");

    const lista = document.createElement("ul");

    for (let index = 0; index < 5; index++) {
        let elemento = document.createElement("li");
        elemento.textContent = "Elemento "+ (index+1);
        lista.appendChild(elemento);
    }

    div.appendChild(lista);
});