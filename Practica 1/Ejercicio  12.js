function tarea1(cb) {
  cb("tarea 1 ");
}
function tarea2(cb) {
  cb("tarea 2 ");
}
tarea1((res1) => {
  console.log(res1);
  tarea2((res2) => {
    console.log(res2);
  });
});
function promesaTarea(msj) {
  return Promise.resolve(msj); 
}
async function ejecutar() {
  console.log(await promesaTarea("tarea 1 completo"));
  console.log(await promesaTarea("tarea 2 completo"));
}


