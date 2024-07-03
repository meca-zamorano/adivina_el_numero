//Variable
let numeroMaxPosible = Math.floor(Math.random()*100)+1;
let numeroSecreto = Math.floor(Math.random()*numeroMaxPosible)+1; //El math.flor me elimina los decimales del math.random y me deja solo el numero entero
let numeroIngresado = 0;
let intentos = 1;
//let palabraVeces = 'vez'
let maximosIntentos = 6;

while(numeroIngresado != numeroSecreto){
    numeroIngresado = parseInt(prompt(`Por favor ingrese un numero entre 1 y ${numeroMaxPosible} :`));
    console.log(typeof(numeroIngresado)); //El typeof me permite ver que tipo de dato estoy recibiendo 

    //Comparación de dos números
    if (numeroIngresado == numeroSecreto){
        //La condición se cumplió
        // Esta linea permite imprimir texto y variables 
        alert(`Adivinaste! el numero es: ${numeroSecreto}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);
    }else {
        //La condición no se cumplió
        if (numeroIngresado > numeroSecreto){
            alert('El numero secreto es menor');
        }else{
            alert('El numero secreto es mayor');
        }
        //Incrementamos el contador cuando la persona no acierta
        intentos ++;
        //palabraVeces = 'veces'
        if(intentos > maximosIntentos){
            alert(`Llegaste al numero maximo de ${maximosIntentos}  intentos`);
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