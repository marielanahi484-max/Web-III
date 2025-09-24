function ejecutar(callback) {
  setTimeout(() => {
    callback();
  }, 2000); 
}
ejecutar(() => {
  console.log("pasado 2 segundos, callback ejecutado");
});

