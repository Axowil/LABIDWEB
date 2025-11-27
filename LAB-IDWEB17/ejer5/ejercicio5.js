// Ejercicio 5

const ejercicio5 = document.getElementById("ejercicio5");
ejercicio5.addEventListener("click", () =>{
    try {
        console.log(adwdaw);
    } catch (error) {
        console.error("Error: " + error);
    } finally {
        console.log("Esto siempre se ejecuta");
    }
});
