/*
///////////////POR VALOR O POR REFERENCIA 
let a = 10;
let b = a;

console.log("a:", a)
console.log("b:", b)

a = 20;

console.log("a:", a)
console.log("b:", b)
// Las {} determinan que es un objeto
let c = {
    nombre: "agus"
}
let d = c;

console.log(c);
console.log(d);

c.nombre = "Agustin";

console.log(c);
console.log(d);

//////////////////////NOTACION DE PUNTO Y CORCHETES
/////notacion de punto

let persona = {
    nombre: "Agustin",
    apellido: 'Mel',
    edad:'29', 
    direccion: {
        pais: 'Argentina',
        cuidad: 'Mar del plata',
        edificio: {
            nombre: "Maral"
        }
    }
};
console.log(persona.apellido);
console.log(persona.direccion);
console.log(persona.direccion.pais);

persona.direccion.codepostal = 7600;

console.log(persona.direccion.codepostal);

console.log(persona.direccion.edificio.nombre);

//para evitar tener que escribir tanto para trabajar con datos anidados en un objeto, una forma es creando una variable para simplificar la ruta de acceso.

let edificio = persona.direccion.edificio;

edificio.direccion = "brown";

console.log(persona)

/////notacion de corchetes, para obtener datos de manera dinamica

let campo = "edad";

console.log(persona["direccion"]["pais"])

console.log(persona[campo])
*/

///////////////////////////////////////////////////////
/////////////////////////////////////////////FUNCIONES 
////////////////////////////////////////////////////////

//es un bloque de codigo que se puede definir una vez y ejecutar en cualquier momento. Opcionalmente una funcion puede aceptar parametros y devolver un valor.
//Las funciones en JS son objetos, un tipo especial de objetos.
//Se dice que las funciones son cuidadanos de primer orden porque pueden asignarse a una valor y pueden pasarse como argumentos y usarse como un valor de retorno.

//Declaracion de funcion
// function primeraFuncion(){
//     console.log("uno");
//     console.log("dos");
//     console.log("tres");
// }

//Invocacion de funcion
// primeraFuncion();
// primeraFuncion();
// primeraFuncion();
// primeraFuncion();

// -------------------------------------------------------

// function unaFuncionQueDeveulveValor(){
//     console.log("uno");
//     return 19;
//     console.log("dos");
//     console.log("tres");
//     return "La funcion a retornado una cadena de texto";
// }

// let valorDeFuncion = unaFuncionQueDeveulveValor();

// console.log(valorDeFuncion)

// -------------------------------------------------------

// function saludar(nombre = "desconocido", edad){
//     console.log(`Hola mi nombre es ${nombre} y tengo ${edad} años.`)
// }

// saludar("Agustin", 29)
// saludar()

//-----------------------------------------------------------
//funcion declarda VS funcion expresada (crear una funcion y asignarsela dinamicamente a una variable)

// funcionDeclarada();

// function funcionDeclarada(){
//     console.log("esto una funcion declatada, puede invocarse en cualqueir parte de nuetro codigo, incluso antes de que la funcion sea declarada")
// };

// funcionDeclarada();

// //Funcion anonima
// const funcionExpresada = function(){
//     console.log("Esto una funcion expresada, una funcion que se la ha asignado como valor a una variable. Si invocamos esta funcion antes de su definicion JS dira..'Cannot access 'funcionExpresada' before initialization.'")
// };

// funcionExpresada();

///////////////////////////////////////////////
//////////////////////////////ARRAYS (ARREGLOS) O VECTORES
////////////////////////////////////////////////
//un arreglo es una coleccion de elementos

const a = [];
const b = [1, true, "HOLA", ["A","B"]];
console.log(a);
console.log(b);
console.log(b.length);
console.log(b[2]);
console.log(b[3][1]);

const c = Array.of("Hola", "X", 3, 4, 5);
console.log("CONSTANTE C", c);

const d = Array(100).fill(false);
console.log(d);

const colores = ["rojo", "verde", "azul"];
console.log(colores);

colores.push("negro");
console.log(colores);

colores.pop();
console.log(colores);

///////////////////////////////////////////////////////////
////////////////////////////////////////////////////OBJETOS
///////////////////////////////////////////////////////////
//se un "const" para definir a los objetos, evita que otro objeto cambie su valor al declararlos como constantes.

//Se puede llamar con su constructor, pero ya nadie lo usa
// const a = new Object();
// console.log(a);

// se usa esta forma
// Dentro de un objeto a las varialbes se les llama atributos o propiedad, y a las funciones se les llaman metodos
// "this" dentro del objeto hace referencia al objeto mismo

// ///como se arma un objeto:

// const agus = {
//     nombre: "Agustin",
//     apellido: "Mel",
//     edad: 29,
//     pasatiempos:["slackline", "acroyoga"],
//     soltero: false,
//     contacto:{
//         email: "agus.mel",
//         movil: "1314123",
//     },
//     saludar: function(){
//         console.log("hola agus :-)")
//     },
//     decirMinombre: function(){
//         console.log(`Hola me llamo ${this.nombre} y tengo ${this.edad} años y me podes contactar con mi siguiente mail ${this.contacto.email}`)
//     }
// };
// console.log(agus);
// console.log(agus["nombre"]);
// console.log(agus["apellido"]);
// console.log(agus.nombre);
// console.log(agus.soltero);
// console.log(agus.pasatiempos[1]);
// console.log(agus.pasatiempos);
// console.log(agus.contacto);
// console.log(agus.contacto.email);
// agus.saludar();
// agus.decirMinombre();

// algunos ejemplos de metodos de objeto
// console.log(Object.keys(agus));

// console.log(Object.values(agus));

// console.log(agus.hasOwnProperty("nombre"))