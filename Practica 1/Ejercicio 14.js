function Dato() {
  return Promise.resolve("Daniela");
}

function usarConCallback(cb) {
  Dato().then(res => cb(null, res)).catch(err => cb(err));
}

usarConCallback((err, res) => {
  if (err) console.error(err);
  else console.log(res);
});

