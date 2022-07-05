/*
- Una función que admita un parámetro "num", y devuelva una lista con esa cantidad de números de la secuencia de Fibonacci 
(Por ejemplo: num = 6 => Resultado [1, 1, 2, 3, 5, 8])

- Ejecuta la depuración de VSCode para visualizar la ejecución de la función*/

function obtenerListaFibonacci(num) {
  let lista = [0, 1];
  let anterior1 = 0;
  let anterior2 = 1;
  let siguiente = 0;

  for (let i = 0; i < num - 2; i++) {
    siguiente = anterior1 + anterior2;
    lista.push(siguiente);
    anterior1 = anterior2;
    anterior2 = siguiente;
  }
  return lista;
}

console.log(obtenerListaFibonacci(10));
