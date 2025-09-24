function invertir(texto) {
    let invertido = "";
    for (let i = texto.length - 1; i >= 0; i--) {
        invertido += texto[i];
    }
    return invertido;
}
let cad = invertir("programacion");
console.log(cad);

