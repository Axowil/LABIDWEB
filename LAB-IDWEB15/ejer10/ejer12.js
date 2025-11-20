//Ejercicio 12

const btejercicio12 = document.getElementById("bej12");

btejercicio12.addEventListener("click", () => {
    const div = document.getElementById("ejercicio12");
    const parrafo = document.querySelector("#ejercicio12 p");
    
    const nuevoDiv = document.createElement("div");
    nuevoDiv.style.backgroundColor = "red";

    const parrafoEnDiv = document.createElement("p");
    parrafoEnDiv.textContent = "Este parrafo esta en el nuevo div";

    nuevoDiv.appendChild(parrafoEnDiv);
    parrafo.remove();
    div.append(nuevoDiv);

});