function potencia(base, exponente) {
    if (exponente === 0) {
        return 1;
    }
    return base * potencia(base, exponente - 1);
}

console.log(potencia(5, 3));  // 125
console.log(potencia(6, 3));  // 216
console.log(potencia(3, 4));  // 81
console.log(potencia(10, 0)); // 1
