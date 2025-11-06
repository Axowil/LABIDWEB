const notas = [15, 20, 18, 13, 15, 7, 10, 20, 2, 8, 7, 9];

const ejercicio8 = (notasArray) => {
    let notaMayor = Math.max(...notasArray);
    let notasNormalizadas = [];

    for (const nota of notasArray) {
        notasNormalizadas.push(Math.round(nota/notaMayor));
    }

    return notasNormalizadas;
};

let notasNormalizadas = ejercicio8(notas);
console.log(notasNormalizadas.join(", "));
