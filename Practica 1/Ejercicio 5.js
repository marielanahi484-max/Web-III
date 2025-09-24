function Palindromo(texto) {
    let invertido = "";
    for (let i = texto.length - 1; i >= 0; i--) {
        invertido += texto[i];
    }
    return texto === invertido;
}
let band = Palindromo("naturaleza");
console.log(band); 
band = Palindromo("reconocer");
console.log(band); 
