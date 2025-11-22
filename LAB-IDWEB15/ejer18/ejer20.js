//Ejercicio 20
const btejercicio20 = document.getElementById("ejer20");

btejercicio20.addEventListener("click", () => {
    const div = document.getElementById("ejercicio20");
    const ul = document.createElement("ul");

    for (let index = 0; index < 10; index++) {
        const li = document.createElement("li");
        const span = document.createElement("span");
        span.textContent = "Esto es span " +(index+1);
        li.textContent = "Li numero "+(index+1)+" ";
        li.appendChild(span);
        ul.appendChild(li);
    }

    div.appendChild(ul);
});