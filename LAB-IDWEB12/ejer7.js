const promedio3Notas = function (nota1, nota2, nota3) {
    return ((nota1 + nota2 + nota3) / 3).toFixed(2);
}

console.log("Promedio:",promedio3Notas(7, 8, 9));
console.log("Promedio",promedio3Notas(5, 6, 7));