// CONSEGNA (1°PARTE)
// Chiedi all’utente la sua email, 
// controlla che sia nella lista di chi può accedere, 
// stampa un messaggio appropriato sull’esito del controllo.

const listMail = ['Pino@gmail.com', 'Pino@yahoo.it', 'Mario@gmail.com', 'Fabio@gmail.com'];
let flag = false;

let userMail = prompt("Inserisci la tua mail");

for(let i = 0; i < listMail.length; i++) {
    if ((userMail.toLowerCase) === (listMail[i].toLowerCase)) {
        flag = true;
    }
}

if (flag) {
    console.log(`l'email ${userMail} è presente nell'elenco!`);
} else {
    console.log(`l'email ${userMail} non è presente nell'elenco!`);
}

//--------------------------------------------------------------------

// CONSEGNA (2° PARTE)
// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.


// assegnamo a 2 variabili il minimo ed il massimo 
let min = 1;
let max = 6;

// entriamo nel ciclo for e generiamo 6 numeri per la macchina e per l'utente
for(i = 0; i < 6; i++){
    let randomMachine = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(`Il numero macchina estratto è ${randomMachine}`);
    let randomHuman = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(`Il numero utente estratto è ${randomHuman}`);

    // inizio con la condizione eccezionale del pareggio per poi successivamente
    // per poi proseguire con il resto 

    if (randomMachine === randomHuman) {
        console.log(`La partita è in pareggio!`);
    } else if (randomHuman > randomMachine) {
        console.log(`L'utente vince!`)
    } else {
        console.log(`La macchina vince!`);
    }
}

