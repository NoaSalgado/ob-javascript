//Una cadena de texto con tu Nombre
nombre = "Noa";

//Otra cadena de texto con tu Apellido
apellido = "Salgado";

//Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
estudiante = nombre.concat(" ", apellido);

//Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
estudianteMayus = estudiante.toUpperCase();

//Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas
estudianteMinus = estudiante.toLowerCase();

//Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
longitud = estudiante.length;

//Una variable que contenga la primera letra del Nombre
primeraLetraNombre = nombre.charAt(0);

//Otra variable que contenga la última letra del Apellido
ultimaLetraApellido = apellido.charAt(apellido.length - 1);

//Una cadena de texto que elimine los espacios de la variable "estudiante"
estudianteSinEspacios = estudiante.replace(" ", "");

//Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
contieneNombre = estudiante.includes(nombre);
