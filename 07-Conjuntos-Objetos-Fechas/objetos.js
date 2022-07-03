//Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
const yo = {
  nombre: "Noa",
  apellido: "Salgado",
  edad: 38,
  altura: 1.68,
  soyDesarrolladora: true,
};

//Una variable que obtenga tu edad a partir del objeto anterior
const miEdad = yo.edad;
console.log(miEdad);

//Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
const amigos = [
  yo,
  {
    nombre: "Miriam",
    apellido: "González",
    edad: 36,
    esDesarrolladora: false,
  },
  {
    nombre: "Patricia",
    apellido: "Pérez",
    edad: 37,
    esDesarrolladora: false,
  },
];

//Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
const amigasPorEdad = amigos.sort((a, b) => b.edad - a.edad);
console.log(amigasPorEdad);
