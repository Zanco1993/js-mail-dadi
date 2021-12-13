//CONSEGNA
//Chiedi all’utente la sua email, 
//controlla che sia nella lista di chi può accedere, 
//stampa un messaggio appropriato sull’esito del controllo.

const listMail = ['Pino@gmail.com', 'Mario@gmail.com', 'Fabio@gmail.com'];
let flag = false;

let userMail = prompt("Inserisci la tua mail");

for(let i = 0; i < listMail.length; i++) {
    if (userMail === listMail[i]) {
        flag = true;
    }
}

if (flag) {
    console.log(`l'email ${userMail} è presente nell'elenco!`);
} else {
    console.log(`l'email ${userMail} non è presente nell'elenco!`);
}

