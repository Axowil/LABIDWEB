//Ejercicio 17
const btejercicio17 = document.getElementById("ejer17");

btejercicio17.addEventListener("click", () => {
    const divContenedor = document.getElementById("ejercicio17");
    const listaNodos = Array.from(divContenedor.children);
    
    listaNodos.sort((a, b) =>
        a.textContent.localeCompare(b.textContent)
    );

    divContenedor.innerHTML = "";
    
    for (const element of listaNodos) {
        divContenedor.appendChild(element);
    }
});