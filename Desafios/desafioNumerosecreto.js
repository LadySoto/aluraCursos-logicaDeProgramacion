//Juego: Adivina el número secreto de 1 a 100

let numeroSecreto = Math.floor(Math.random()*100)+1;
let numeroUsuario = 0;
let intentosUsuario = 1;
let intentos = 3;

console.log(numeroSecreto);

alert("¡Bienvenido! Adivina el Número Secreto");

while(numeroUsuario != numeroSecreto){

    numeroUsuario = parseInt(prompt("Ingresa un número del 1 al 100"));

    console.log(numeroUsuario);

    if(numeroUsuario >=1 && numeroUsuario <=100){

        if(numeroUsuario == numeroSecreto){
            alert(`¡Felicidades! adivinaste el número secreto que es ${numeroSecreto}. Lo hiciste ${intentosUsuario} ${intentosUsuario == 1 ? "vez" : "veces"}`);
            break;
        }else if(numeroUsuario > numeroSecreto){
            alert("¡Demasiado alto! Intenta de nuevo");
        }else{
            alert("¡Demasiado bajo! Intenta de nuevo");
        }
    }else{
        alert("¡Número fuera de rango! Intenta de nuevo");
    }

    intentosUsuario++;

    if(intentosUsuario > intentos){
        alert(`¡Lo siento! agotaste tus intentos, el número secreto era ${numeroSecreto}`);
        break;
    }
}




