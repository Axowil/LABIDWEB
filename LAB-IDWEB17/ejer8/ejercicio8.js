// Ejercicio 8

const nivel2 = () => {
    throw new Error("Segundo nivel");
    
}

const nivel1 = () => {
    try {
        nivel2();    
    }
    catch {
        throw new Error("Primer nivel");
    }
}

const funp = () => {
    try {
        nivel1();
    } catch (error) {
        console.log(error);
    }
};

const ejercicio8 = document.getElementById("ejercicio8");
ejercicio8.addEventListener("click", () => {
    funp();
});

