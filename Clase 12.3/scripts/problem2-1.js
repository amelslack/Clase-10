let num1 = prompt('ingresar un valor');
alert(`el valor es ${num1} cm`);
let operacion = prompt(`ingerse la unidad en la que desea converrir el valor ${num1} cm: "pulgadas", "pies", "metros", "yardas"`);
let pulgadas = (num1/2.54)
let pies = (num1/30.48)
let metros = (num1/100)
let yardas = (num1/91.44)

if(operacion === "pulgadas"){
    alert(`el resultado es ${pulgadas} pulgadas`)
}else if(operacion === "pies"){
    alert(`el resultado es ${pies} pies`)
}else if(operacion === "metros"){
    alert(`el resultado es ${metros} metros`)
}else if(operacion === "yardas"){
    alert(`el resultado es ${yardas} yardas`)
}else{
    alert('El valor agregado no coincide con los descriptos en pantalla, vuelva a intentarlo nuevamente')
};  















