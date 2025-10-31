const tieneDuplicados = (arr) => {
    return new Set(arr).size !== arr.length;
};

console.log(tieneDuplicados([3, 5, 8, 12])); // false
console.log(tieneDuplicados([5, 5, 3, 12]));  // true
