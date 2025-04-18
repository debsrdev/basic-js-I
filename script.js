//Bienvenida a Javascript básico, para comentar una linea de código puedes usar las dos barras // y para comentar un bloque de varias líneas puedes usar barra y asterisco para abrir /*  asterisco y barra para cerrar */

//En el archivo index.html que tienes abierto en el navegador (preferiblemente chrome o firefox) vamos a trabajar con la consola, abre tu inspector y en la pestaña de consola, mira si puedes ver el mensaje escrito abajo.

console.log("Hola soy tu consola y juntas vamos a aprender Javascript");

//Si has encontrado el mensaje puedes continuar con los ejercicios

//Ejercicio 1: Imprime en la consola "Bienvenida/o al bootcamp Femcoders de Factoría F5" y mira en tu navegador si sale el resultado.

//Escribe tu código aquí
console.log("EJERCICIO 1 -----------------------------");
console.log("Bienvenida/o al bootcamp Femcoders de Factoría F5");

//VARIABLES Y TIPOS DE DATOS
//Ejercicio 2: Crea una variable por los siguientes tipos de dato: string, number, boolean, null, undefined, object, array e imprímelos en la consola.

//Escribe tu código aquí
console.log("EJERCICIO 2 -----------------------------");
let varString = "Esta es la variable string en js";
console.log(varString);

let varNumber = 23;
console.log(varNumber);

let varBoolean = true;
console.log(varBoolean);

let varNull = null;
console.log(varNull);

let varUndefined;
console.log(varUndefined);

let varObject = { nombre: "Débora", edad: 34 };
console.log(varObject);

let varArray = [1, true, "esto es parte de un array"];
console.log(varArray);

//Ejercicio 3: Crea una constante llamada postres con un tipo de dato array que contiene los siguientes elementos: helado, tarta, pastel e imprímelo en la consola.

//Escribe tu código aquí
console.log("EJERCICIO 3 -----------------------------");
const postres = ["helado", "tarta", "pastel"];
console.log(postres);

//Ejercicio 4: Crea una constante con un tipo de dato objeto llamado coder que contengan dos propiedades, nombre y edad e imprímelo en la consola.

//Escribe tu código aquí
console.log("EJERCICIO 4 -----------------------------");
const coder = { nombre: "Débora", edad: 34 };
console.log(coder);

//Ejercicio 5: Busca como imprimir en consola el tipo de dato de cada variable que hemos creado.

//Escribe tu código aquí
console.log("EJERCICIO 5 -----------------------------");
console.log(typeof varString);
console.log(typeof varNumber);
console.log(typeof varBoolean);
console.log(typeof varNull);
console.log(typeof varUndefined);
console.log(typeof varObject);
console.log(typeof varArray);
console.log(typeof postres);
console.log(typeof coder);

//OPERADORES ARITMÉTICOS
//Ejercicio 6: Crea una varible que sume 2 números e imprime el resultado en consola.

//Escribe tu código aquí
console.log("EJERCICIO 6 -----------------------------");
let varSuma = 3 + 2;
console.log(varSuma);

//Ejercicio 7: Crea una varible que reste 2 números e imprime el resultado en consola.

//Escribe tu código aquí
console.log("EJERCICIO 7 -----------------------------");
let varResta = 3 - 2;
console.log(varResta);

//Ejercicio 8: Crea una varible que multiplique 2 números e imprime el resultado en consola.

//Escribe tu código aquí
console.log("EJERCICIO 8 -----------------------------");
let varMulti = 3 * 2;
console.log(varMulti);

//Ejercicio 9: Crea una varible que divida 2 números e imprime el resultado en consola.

//Escribe tu código aquí
console.log("EJERCICIO 9 -----------------------------");
let varDivi = 3 / 2;
console.log(varDivi);

//OPERADORES DE COMPARACIÓN
// Ejercicio 10: Crea dos variables, la primera con valor 1 y la segunda con valor 2, compara ambas variables dentro de otra variable e imprime en la consola para ver el resultado.

//Escribe tu código aquí
console.log("EJERCICIO 10 -----------------------------");
let varUno = 1;
let varDos = 2;
let varComparar = varUno == varDos;
console.log(varComparar);

// Ejercicio 10: Crea otra variable que compare las dos primeras variables creadas en el ejercicio anterior, para que el resultado impreso en la consola sea true.

//Escribe tu código aquí
console.log("EJERCICIO 10 -----------------------------");
let varCompararTrue = varUno < varDos;
console.log(varCompararTrue);

//Ejercicio 11: completa el ejercicio
console.log("EJERCICIO 11 -----------------------------");
let num1 = 15;
let num2 = 20;
let comparacion = num1 != num2; //Realiza la operación de comparación que consideres para que el resultado en consola sea true
console.log(comparacion);

//Ejercicio 12: completa el ejercicio
console.log("EJERCICIO 12 -----------------------------");
let num3 = 1;
let num3AsString = "1";
// === compara el valor y el tipo de dato, igualdad estricta
let result = num3 === num3AsString; //Realiza la operación de comparación que consideres entre las dos variables dadas, para que el resultado en consola sea false sin usar el comparador de desigualdad
console.log(result);

//Ejercicio 13: completa el ejercicio
console.log("EJERCICIO 13 -----------------------------");
// == compara el valor solamente, que es el mismo, pese a que no sean el mismo tipo de dato
let result2 = num3 == num3AsString; //Realiza la operación de comparación que consideres con las dos variables del ejercicio anterior para que el resultado en consola sea true.
console.log(result2);

//OPERADORES DE CADENAS
//Ejercicio 14: Crea una variable con tu nombre y otra variable con tu apellido y crea otra nueva variable con tu nombre completo concatenando las dos variables anteriores e imprime en consola. Debe haber un espacio entre tu nombre y apellido.

//Escribe tu código aquí
console.log("EJERCICIO 14 -----------------------------");
let varName = "Débora";
let varSurname = "Rubio";
let varCoderData = varName + " " + varSurname;
console.log(varCoderData);

//OPERADORES DE LÓGICA
//Ejercicio 15: Descomenta todo el bloque desde la variable 'a' hasta el 'console.log(res6)' y completa el ejercicio. (Saldrá un error y no podrás visualizar el resultado hasta que termines este ejercicio)
console.log("EJERCICIO 15 -----------------------------");
let a = 6;
let b = 3;

let res = a < 10 && b > 1; //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea true
console.log(res);

let res2 = a < 10 && b < 1; //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea false
console.log(res2);

let res3 = a == 5 && b == 5; //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea false
console.log(res3);

let res4 = a == 6 || b == 0; //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea true
console.log(res4);

let res5 = a == 0 || b == 3; //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea true
console.log(res5);

let res6 = a == 6 && b == 3; //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea true
console.log(res6);
