function mayormenor(arr) {
    let mayor = arr[0];
    let menor = arr[0];
    for (let num of arr) {
        if (num > mayor) mayor = num;
        if (num < menor) menor = num;
    }
    return { mayor, menor };
}
let obj = mayormenor([8, 3, 11, 6, 0]);
console.log(obj);

