//Variable
let numeroSecreto = 4;
let numeroIngresado = 0;
let intentos = 1;
let palabraVeces = 'vez'
while(numeroIngresado != numeroSecreto){
    numeroIngresado = prompt("Por favor ingrese un numero entre 1 y 10 :");

    //Comparación de dos números
    if (numeroIngresado == numeroSecreto){
        //La condición se cumplió
        // Esta linea permite imprimir texto y variables 
        alert(`Adivinaste! el numero es: ${numeroSecreto}. Lo hiciste en ${intentos} ${palabraVeces}`);
    }else {
        //La condición no se cumplió
        if (numeroIngresado > numeroSecreto){
            alert('El numero secreto es menor');
        }else{
            alert('El numero secreto es mayor');
        }
        //Incrementamos el contador cuando la persona no acierta
        intentos = intentos + 1;
        palabraVeces = 'veces'
        if(intentos > 3){
            alert('Llegaste al numero maximo de intentos');
            break;
        }
    }
}

//DESAFIOS 

//IMPRIMIR NÚMERO DEL 1 AL 10
 /*let contador = 1;
    while(contador <= 10){
        console.log(`Numero: ${contador}`);
        contador ++;
    }*/

//IMPRIMIR NÚMERO DEL 10 AL 0
 /*let contador = 10;
    while(contador >= 1){
        console.log(`Numero: ${contador}`);
        contador --;
    }*/

//CUENTA PROGRESIVA SOLICITANDO UN NUMERO

/*let numeroIngresado = prompt('Por favor digite el numero para realizar el conteo:')
let contador = 1;
    while(contador <= numeroIngresado){
        console.log(`Numero: ${contador}`);
        contador ++;
    }*/