//Ejercicio 14

const ejercicio14 = document.getElementById("ejercicio14");
ejercicio14.addEventListener("click", () => {
    const lista = separarOraciones("Hola. Mundo. Como? Estas.");
    for (const element of lista) {
        console.log(element);
    }
});

function separarOraciones(string) {
    return string.split(/[.?!]/).map(s => s.trim()).filter(Boolean);    
}