//////FUNCIONES 
//declarada
function estoEsunaFuncion(){
    console.log("uno");
    console.log("dos");
    console.log("tres");
    //al usar return el compilador la detecta e ignora todo lo que se siga escriviendo debajo
    return "La funcion devuelve una cadena de texto";
}

//invocaion de funciones
estoEsunaFuncion();
//

let valorDeFuncion = estoEsunaFuncion()

console.log(valorDeFuncion)








//////alert es una alerta qeu devuelve un valor undefined
//window.alert("hola esto es una alerta");

//////Confirm genera valores de verdadero o falso
//window.confirm("hola esto es una confirmacion");

//////Prompt permite al usuario ingresar un valor y que se almacene en el prompt
//window.prompt("esto es un aviso");

//No es necesario escribir "window." para que funcionen
/*
let alerta = alert("hola esto es una alerta");
let confirmacion = confirm("hola esto es una confirmacion");
let aviso = prompt("esto es un aviso");

console.log(alerta);
console.log(confirmacion);
console.log(aviso);
*/

//////Parseo: convierte tipos de datos
/*
let entero = "3";
let decimal = "3.4";
let aEntero = "3"

//parseInt: transforma un string en un numero
console.log(parseInt(entero) + 2)

console.log(Number.parseInt(aEntero) + 1)

//parseFloat: transforma un string a numero decimal
console.log(parseFloat(decimal) + 1)
*/


