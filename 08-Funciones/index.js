//Una función sin parámetros que devuelva siempre "true"
function returnTrue() {
  return true;
}

console.log(returnTrue());

//Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado
const promesa = new Promise((resolve, reject) => {
  setTimeout(5);
  if (true) {
    resolve();
  } else {
    reject();
  }
});

promesa
  .then(() => {
    setTimeout(5);
    console.log("Soy una promesa");
  })
  .catch(() => console.log("ERROR"));

//Una función generadora de índices pares automáticos
function* generaIndicePar() {
  let indice = 0;
  while (true) {
    indice += 2;
    yield indice;
    if (indice === 100) {
      return;
    }
  }
}

const index = generaIndicePar();
console.log(index.next().value);
console.log(index.next().value);
console.log(index.next().value);
console.log(index.next().value);
console.log(index.next().value);
