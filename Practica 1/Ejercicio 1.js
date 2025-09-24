function Vocales(texto) {
    const vocales = ['a', 'e', 'i', 'o', 'u'];
    const resultado = { a: 0, e: 0, i: 0, o: 0, u: 0 };
    for (let letra of texto) {
        if (vocales.includes(letra)) {
            resultado[letra]++;
        }
    }
    return resultado;
}
let obj = Vocales("hermosa vista");
console.log(obj);
