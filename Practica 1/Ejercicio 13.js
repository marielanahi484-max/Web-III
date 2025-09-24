function paso1() {
  return Promise.resolve("a");
}
function paso2(res1) {
  return Promise.resolve(res1 + " → b");
}
function paso3(res2) {
  return Promise.resolve(res2 + " → c ");
}
paso1()
  .then(res1 => paso2(res1))
  .then(res2 => paso3(res2))
  .then(res3 => console.log(res3));

async function ejecutarPasos() {
  let res1 = await paso1();
  let res2 = await paso2(res1);
  let res3 = await paso3(res2);
  console.log(res3);
}


