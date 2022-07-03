//Una variable que contenga la lista de la compra (mínimo 5 elementos)
let listaCompra = ["Leche", "Huevos", "Queso", "Lechuga", "Tomates"];
console.log(listaCompra);

//Modifica la lista de la compra y añádele "Aceite de Girasol"
listaCompra.push("Aceite de Girasol");
console.log(listaCompra);

//Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
listaCompra = listaCompra.filter((item) => item !== "Aceite de Girasol");
console.log(listaCompra);
//Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
const peliculasFavoritas = [
  {
    titulo: "Pulp Fiction",
    director: "Quentin Tarantino",
    fecha: 1994,
  },
  {
    titulo: "El Cuervo",
    director: "Alex Proyas",
    fecha: 1994,
  },
  {
    titulo: "V de Vendetta",
    director: "James McTeigue",
    fecha: 2005,
  },
];

//Una nueva lista que contenga las películas posteriores al 1 de enero de 2000 (utilizando filter)
const peliculasRecientes = peliculasFavoritas.filter(
  (item) => item.fecha > 2000
);
console.log(peliculasRecientes);

//Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
const directores = peliculasFavoritas.map((item) => item.director);
console.log(directores);

//Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
const titulos = peliculasFavoritas.map((item) => item.titulo);
console.log(titulos);

//Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
const listaPeliculas = directores.concat(titulos);
console.log(listaPeliculas);

//Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación
const nuevaListaPeliculas = [...directores, ...titulos];
console.log(nuevaListaPeliculas);
