console.log('JS OK');

/*SNACK 1
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti. */

/*
1 - Prendo l'elemento dal DOM;
2 - Creo un ciclo for;
    2a - Chiedo all'utente di inserire un numero, tra 1 a 100;
3 - Aggiungo tutti i numeri ottenuti dall'utente a una variabile somma;
4 - Stampo la somma finale;
*/

// 1 - Prendo l'elemento dal DOM;
const sum = document.getElementById('sum');

// 2 - Creo un ciclo for;
for (i = 0; i < 10; i++) {
    // 2a - Chiedo all'utente di inserire un numero, tra 1 e 100;
    const userNumber = parseInt(prompt('Inserisci un numero, tra 1 e 100', 30).trim());
    console.log(userNumber);
}

