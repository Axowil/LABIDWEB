//Ejercicio 15

const ejercicio15 = document.getElementById("ejercicio15");
ejercicio15.addEventListener("click", () => {
    dividir0(12, 0)
    .then(res => {console.log(res)})
    .catch(err => {console.log(err)});
});

function dividir0(a, b) {
    console.log("---Division---")
    return new Promise((response, reject) => {
        setTimeout(() => {
           if (b === 0) {
            reject("Error: No se puede dividir entre 0");
            }
            else {
                response(a/b);
            } 
        }, 1500);
    });
}

