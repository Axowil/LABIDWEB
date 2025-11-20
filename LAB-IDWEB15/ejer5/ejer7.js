//Ejercicio 7
const btejercicio7 = document.getElementById("bej7");
btejercicio7.addEventListener("click", () => {
    const listaUl = document.querySelector("#ejercicio7 ul");

    for (let index = 0; index < listaUl.children.length; index++) {
        console.log(listaUl.children[index].textContent);
    }

});