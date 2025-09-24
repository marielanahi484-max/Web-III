function obtener() {
  return new Promise(resolve => {
    resolve("Hola, Mariel");
  });
}
obtener().then(nombre => {
  console.log("con promesa:", nombre);
});
async function mostrar() {
  let nombre = await obtener();
  console.log("con async/await:", nombre);
}
 mostrar();


