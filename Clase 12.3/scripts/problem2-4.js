let segUsuario = prompt("Ingrese los segundos que desee transformar en un Reloj");
let horas = Math.trunc((segUsuario / 60) / 60);
let minutos = Math.trunc(((segUsuario / 60) % 60 ));
let seg = Math.trunc(segUsuario % 60);



if(typeof segUsuario == "string"){
    alert(`Tus ${segUsuario} segundos se transformaron en: ${horas} horas, ${minutos} minutos y ${seg} segundos`)
    console.log(`Tus ${segUsuario} segundos se transformaron en: ${horas} horas, ${minutos} minutos y ${seg} segundos`)
    
} else{
    alert('Los valores ingresados son incorrectos, vuelva a intentarlo')
}




