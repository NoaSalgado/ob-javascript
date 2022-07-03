//Un nuevo Set con los nombres de tu familia
const arrayFamilia = ["Miriam", "Pedro", "Óscar", "Noa"];
const setFamilia = new Set(arrayFamilia);
console.log(setFamilia);

//Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)
setFamilia.add("Noa");
console.log(setFamilia);

//Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)
setFamilia.add("JavaScript");
console.log(setFamilia);
