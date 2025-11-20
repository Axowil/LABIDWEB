//Ejercicio 5
const btejercicio5 = document.getElementById("bej5");
btejercicio5.addEventListener("click", () => {
    const div5 = document.getElementById("ejercicio5");
    const primerImagen = div5.firstElementChild;

    primerImagen.setAttribute("src", "https://media.istockphoto.com/id/1443562748/es/foto/lindo-gato-de-jengibre.jpg?s=612x612&w=0&k=20&c=JVC5Z3LxpaTQaXu_fMZjIb73r39z6b0SnAxvNI8iZG0=");
    primerImagen.setAttribute("alt", "imagenGato");
});
