function ParesImpares(arr) {
    const resultado = { pares: [], impares: [] };
    for (let num of arr) {
        if (num % 2 === 0) {
            resultado.pares.push(num);
        } else {
            resultado.impares.push(num);
        }
    }
    return resultado;
}
let obj = ParesImpares([10, 15, 22, 31, 40]);
console.log(obj);
