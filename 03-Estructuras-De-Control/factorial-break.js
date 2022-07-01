let factorial = 10;
let contador = 9;

while (true) {
  if (contador == 0) {
    break;
  } else {
    factorial *= contador;
    contador--;
  }
}

console.log(`El factorial de 10 es ${factorial}`);
