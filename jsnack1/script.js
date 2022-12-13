console.log('JS OK');

/*SNACK 1
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti. */

/*
1 - Prendo l'elemento dal DOM;
2 - Creo un ciclo for;
    2a - Chiedo all'utente di inserire un numero, tra 1 a 100;
    2b - Controllo;
    2c - Aggiungo tutti i numeri ottenuti dall'utente a una variabile somma;
4 - Stampo la somma finale;
*/

// 1 - Prendo l'elemento dal DOM;
const sum = document.getElementById('sum');

// Variabili generiche
let userNumber;
let sumNumber = 0;

// 2 - Creo un ciclo for;
for (i = 0; i < 10; i++) {
    // 2a - Chiedo all'utente di inserire un numero, tra 1 e 100;
    userNumber = parseInt(prompt('Inserisci un numero, tra 1 e 100', 30).trim());
    ////console.log(userNumber);
    // 2b - Controllo
    if (isNaN(userNumber) || userNumber <= 0 || userNumber > 100) { 
        alert('Devi inserire un numero tra 1 e 100');
    }
    // 2c - Aggiungo tutti i numeri ottenuti dall'utente a una variabile somma;
    sumNumber += userNumber;
}

console.log(sumNumber);


