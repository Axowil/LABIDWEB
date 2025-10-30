function esMultiploDe(num1, num2) {
    if ( num1 % num2 === 0 ) {
        return true;
    }
    return false;
}

console.log(esMultiploDe(40, 2));
console.log(esMultiploDe(90, 3));