function promesa() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("promesa cumplida luego de 3 segundos");
    }, 3000);
  });
}
promesa().then((mensaje) => console.log(mensaje));
