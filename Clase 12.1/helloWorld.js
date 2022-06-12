/////////////////////////////////////DATOS PRIMITIVOS
//* SE ESCRIBEN CON lowerCamelCase

////////////////////////////////////////Cadena de texto: String
let nombre = "Agustin";
let apellido = "Mel";
let direccion = "Casa5";

console.log(nombre, apellido, direccion);

//Usar la propiedad de String (caracteristicas o atributos): length
console.log( nombre.length, apellido.length, direccion.length);

//Uso de un metodo de String (una accion): permite definir la fomra de escribir un texto
//*se escriben con parentesis al final.

console.log(nombre.toUpperCase());
console.log(nombre.toLowerCase());


//Contactenar: unir una cadena de texto con otra cadena o con una variable de tipo string

let saludo = "Hola mi nombre es" + " " + nombre + " " + apellido + ".";

console.log(saludo);

//Para simplificar lo anterior se puede interpolar una variable (osea meter en una cadena de texto el valor de una varaible) ---> para eso se usan las TEMPLATE STRING 
//*se usan las comillas invertidas simples o backticks ----> ``

let saludo2 = `Hola mi nombre es ${nombre} ${apellido}`;

console.log(saludo2);

//*tambien sirve para visualizar un codigo html tal cual se ve (sino se muestra en una linea compilado)
let ul = `
<ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
</ul>`;

console.log(ul)

//////////////////////////////////////////////////NUMBER

let a = 2;

//* tambien se lo puede escribir con su constructor 

let b = new Number (1);

let c = 4.34;

console.log(a);
console.log(b);
//o tambien se puede escribir:
console.log(a,b);

/////////////////////////////////////////////////////BOOLEANS

let verdadero = true;
let falso = false;
//o escribirlo con su constructor
let v = Boolean(true);
let f = Boolean(false);

console.log(verdadero, falso);
console.log(v,f);

//Valores que tienden a V o F
console.log(Boolean(0))
console.log(Boolean(1))
console.log(Boolean(-1))
console.log(Boolean(""))
console.log(Boolean(" "))
console.log(Boolean(NaN))
console.log(Boolean(null))
console.log(Boolean(Infinity))

///////////////////////////////////////////////////NULL - UNDEFINE - NaN
//Null: es una variable que esta vacia, pero tiene valor asignado intensionalmente como variable vacia
//UNdefine: es una variable que esta vacia, no tiene valor pero lo detecta JS

let nulo = null;
console.log(nulo);

let indefinida;
console.log(indefinida)

//NaN: not a number, suele aparecer cuando se esta realizando operaciones aritmeticas con datos que no son numeros

let noEsUnNumero = "hola" * 4
console.log(noEsUnNumero)

