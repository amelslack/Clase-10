/*CLASE 3 VARIABLES
//varaibles globales
var hola = "Hola Mundo"
//variables de bloque
let hello = "Hello World"

console.log(hola)
console.log(hello)
console.log(window)
console.log(window.hola)
console.log(window.hello)
//ambito global (window) y ambito de bloque - uso de "var"
console.log("******************var************************")
var musica = "Rock"
console.log("En ambito pre-global la musica es", musica)
{
var musica = "Pop"
console.log("En ambito de bloque la musica es", musica)
}
console.log("En ambito post-global la musica es", musica)

//ambito global (window) y ambito de bloque - uso de "let"
console.log("*********************let*************************")
let musica2 = "Rock"
console.log("En ambito pre-global la musica es", musica2)
{
let musica2 = "Pop"
console.log("En ambito de bloque la musica es", musica2)
}
console.log("En ambito post-global la musica es", musica2)

//La variable (var) musica queda guardada en el objeto window
console.log(window.musica)
//La variable (let) musica2 no queda guardada en el objeto window
console.log(window.musica2)
*/

//CALSE VARIABLES 2
// const PI = 3.1416;
// console.log("Valor de PI", PI);
// let a;
// a = "perro";
// console.log(a);

// let objeto {
//     nombre "Agus"
//     edad 35
// }

// let colores ['blanco,negro,azul']
//inicializador - nombre de la variable - valor (tipo de variable es interno/implicito)
let myFirstString = "22";
let mySecondString = "Hello";
let myFirstNumber = 33;
let mySecondNumber = 55;
let myFirstBoolean = true;
let myFirstNull = null;
let myFirstUndefined = undefined;
const MY_THIRD_STRING = "World";
const MY_THIRD_NUMBER = 11;

//se puede sobre escribir varaibles (solo let o var)

myFirstString = "Hola";
console.log(myFirstString);

// en consola se diferencia tipo number o string por el color (blanco/violeta/gris/rojo)

//Se puede hacer operaciones y pruebas dentro de console.log

console.log(222);
console.log("333");
console.log(222 + 333);
console.log("555" + "111");
console.log(151 + "678");

//Buena practica, trabajar con variables y no con Harcodeo

console.log(myFirstNumber);
console.log(myFirstNumber + mySecondNumber);
console.log(MY_THIRD_NUMBER);
console.log(myFirstString);

//console.log(MY_THIRD_STRING)



// MY_THIRD_STRING = "Bye";
// console.log(MY_THIRD_STRING);

//Tipado debil - Jabascrip cambia los tipos

console.log(false == 0);
console.log(false === 1);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//casesensitive - distingue min y MAY

const I_AM_TRUE = true;
const I_AM_FALSE = false;

let change = "";

//Lectura de codigo: Si pasa consicion entonces accion, sino pasa accion

if (true){
    console.log("Resultado", I_AM_TRUE)
    console.log(`Resultado ${myFirstNumber}`)
} else {
    console.log(`Resultado ${I_AM_FALSE}`)
}

if (false){
    change = "Soy Verdadero"
    console.log(change)
} else {
    change = "Soy Falso"
    console.log(change)
}

console.log(change)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// CONDICIONALES

//||OR
//&&AND
//==IGUAL
//===ESTRICTAMENTE IGUAL
//!=DISTINTO
//!==ESTRICTAMENTE DISTINTO
//<MENOR
//>MAYOR
//<=MENOR IGUAL
//>= MAYOR IGUAL

//+,-,*,/
//% MODULO O RESTO
//**, //, POTENCIA RAIZ


const VALUE = 11;
let result = "";

if (11 == VALUE){
    result = true
    console.warn("Pruebas Logicas", result)
}

console.log(11 == VALUE)
console.log(VALUE)

console.log(11 == VALUE || 16 == VALUE)

console.log(22 == VALUE && 11 == VALUE)

console.log(11 > VALUE)
console.log(11 >= VALUE)
console.log(11 != VALUE)
console.log(11 === VALUE)
console.log("Hola", "11" === VALUE)
console.log("11" == VALUE)


//clase sigueinte bucles, problemas de aplicacion 































