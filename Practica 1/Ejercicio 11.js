function paso1() {
  return Promise.resolve("paso 1");
}
function paso2(msg) {
  return Promise.resolve(msg + " → paso 2");
}
function paso3(msg) {
  return Promise.resolve(msg + " → paso 3");
}
paso1()
  .then(res => paso2(res))
  .then(res => paso3(res))
  .then(res => console.log(res)); 

