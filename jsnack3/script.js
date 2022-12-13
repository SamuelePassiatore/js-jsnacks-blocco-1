console.log('JS OK');

/* SNACK BONUS
L'utente inserisce un numero di 4 cifre in un input. 
Calcola la somma di tutte le cifre che compongono il numero 
e stampala in pagina.*/

/*
1 - Prendo gli elementi dal DOM;
2 - Aggancio l'event listener al button calcola;
    2a - Recupero valore dell'input;
    2b - Validazione degli input raccolti;
    2c - Creo il ciclo for dei numeri raccolti;
    2d - Svuoto il campo del numero;
    2e - Stampo un messaggio sul risultato della somma;
*/

// 1 - Prendo gli elementi dal DOM;
const inputNumber = document.getElementById('number');
const button = document.getElementById('button');
const result = document.getElementById('result');

// 2 - Aggancio l'event listener al button entrata;
button.addEventListener('click', function () {
    // 2a - Recupero valore dell'input;
    const userNumber = parseInt(inputNumber.value.trim());
    console.log(userNumber);
    // 2b - Validazione degli input raccolti;
    if(!userNumber || (isNaN(userNumber) || userNumber < 1000)){
        alert('Devi inserire un numero di 4 cifre!');
        return;
    }
});
