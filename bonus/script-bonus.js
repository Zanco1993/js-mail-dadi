//BONUS 
//prendo la somma dei 6 valori della macchina e li metto a confronto
//con la somma dei valori dell'utente
//verifico alla fine chi è il vincitore

// assegnamo a 2 variabili il minimo ed il massimo
// facciamo partire un contatore di somma da 0 che verrà aggiornato
// ad ogni giro
let min = 1;
let max = 6;
let sommaMachine = 0;
let sommaHuman = 0;

// entriamo nel ciclo for e generiamo 6 numeri per la macchina e per l'utente
// aggiornando ad ogni giro il valore somma
for(i = 0; i < 6; i++){
    let randomMachine = Math.floor(Math.random() * (max - min + 1)) + min;
    sommaMachine += randomMachine;
    console.log(`La somma dei numeri estratti per la macchina è ${sommaMachine}`);

    let randomHuman = Math.floor(Math.random() * (max - min + 1)) + min;
    sommaHuman += randomHuman;
    console.log(`La somma dei numeri estratti per l'utente è ${sommaHuman}`);

    // inizio con la condizione eccezionale del pareggio per poi successivamente
    // per poi proseguire con il resto 

    if (sommaMachine === sommaHuman) {
        console.log(`La partita è in pareggio!`);
    } else if (sommaHuman > sommaMachine) {
        console.log(`L'utente vince!`)
    } else {
        console.log(`La macchina vince!`);
    }
}