function leerDato(cb) {
  const nombreUsuario = "Anahi";
  cb(null, `Hola, ${nombreUsuario}`);
}

function leerPromesa() {
  return new Promise((resolve, reject) => {
    leerDato((err, dato) => {
      if (err) reject(err);
      else resolve(dato);
    });
  });
}
leerPromesa().then(console.log).catch(console.error);


