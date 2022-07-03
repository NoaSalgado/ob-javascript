//La fecha de hoy
console.log(new Date());

//La fecha de tu nacimiento
console.log(new Date("April 12, 1984"));

//Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
const masTarde = new Date() > new Date("April 12, 1984");
console.log(masTarde);

//Una variable que contenga el día de tu nacimiento
const miFechaNacimiento = new Date("April 12, 1984");

//Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
const miMesNacimiento = miFechaNacimiento.getMonth() + 1;
console.log(miMesNacimiento);

//Una variable que contenga el año de tu nacimiento (con 4 dígitos)
const miAnyoNacimiento = miFechaNacimiento.getFullYear();
console.log(miAnyoNacimiento);
