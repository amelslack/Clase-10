//ordenar de mayor a menor
let num1 = prompt('ingrese 1er valor');
let num2 = prompt('Ingrese 2do valor');
let num3 = prompt('Ingrese 3er valor');

if(num1 >= num2 && num2 >= num3){
    alert(`el orden de mayor a menor es ${num1}, ${num2}, ${num3}`);
}else if(num1 >= num3 && num3 >= num2){
alert(`el orden de mayor a menor es ${num1}, ${num3}, ${num2}`);
}else if(num2 >= num1 && num1 >= num3){
    alert(`el orden de mayor a menor es ${num2}, ${num1}, ${num3}`);
}else if(num2 >= num3 && num3 >= num1){
alert(`el orden de mayor a menor es ${num2}, ${num3}, ${num1}`);
}else if(num3 >= num2 && num2 >= num1){
    alert(`el orden de mayor a menor es ${num3}, ${num2}, ${num1}`);
}else if(num3 >= num1 && num1 >= num2){
alert(`el orden de mayor a menor es ${num3}, ${num1}, ${num2}`);
}else{
    alert('El valor agregado no coincide con los descriptos en pantalla, vuelva a intentarlo nuevamente');
}

//////////////// Otra forma: se puede hacer anidado
// let may;
// let  min;

// if(num1 > num2){
//     if(num1 > num3){
//         may = num1
//         if(num2 < num3){
//             min = num2
//         }
//     }
// }





















