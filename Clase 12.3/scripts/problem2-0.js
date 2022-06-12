let num1 = prompt("ingrese un valor");
let num2 = prompt("ingrese otro valor");
let operacion = prompt('Elija "suma" o "resta" para realizar la operacion');
let suma = (`${Number.parseInt(num1) + Number.parseInt(num2)}`);
let resta = (`${Number.parseInt(num1) - Number.parseInt(num2)}`);


if(operacion === "suma"){
    alert(`El resultado de la suma es ${suma}`)
    console.log(suma)
} else if(operacion === "resta"){
    alert(`el resultado de la resta es ${resta}`)
    console.log(resta)
} else(
    alert(`El valor a sido mal ingresado, vuelva a realizar la operacion y revise su sintaxis`)
);

