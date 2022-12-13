console.log('JS OK');

/*SNACK 2
In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby. 
L’utente inserisce il suo nome tramite un input.
Comunicagli se può partecipare o no alla festa. */

/*
1 - Prendo gli elementi dal DOM;
2 - Creo un array con cinque nomi autorizzati;
3 - Aggancio l'event listener al button entrata;
    3a - Recupero valore dell'input;
    3b - Validazione degli input raccolti;
    3c - Creo il ciclo for dei nomi autorizzati;
    3d - Genero un condizionale if riguardo la possibile corrispondenza dei nomi;
    3e - Genero un condizionale if sul messaggio da mostrare;
    3f - Svuoto il campo del nome;
    3g - Stampo un messaggio sull'esito del controllo;
*/

// 1 - Prendo gli elementi dal DOM;
const inputName = document.getElementById('name');
const button = document.getElementById('button');
const message = document.getElementById('message');

// 2 - Creo un array con cinque nomi autorizzati;
const nameGuests = [
"Napoleone", "Socrate", "Gesù", "Darwin", "Maradona"
];
////console.log(nameGuests);

// 3 - Aggancio l'event listener al button entrata;
button.addEventListener('click', function () {
    
    // 3a - Recupero valore dell'input;
    const userName = inputName.value.trim();
    console.log(userName);

    // 3b - Validazione degli input raccolti;
    if(!userName || (!isNaN(userName))){
    alert('Devi inserire un nome!');
    return;
    }

    // 3c - Creo il ciclo for dei nomi autorizzati;
    let isAuthorized = false;
    for(i = 0; i < nameGuests.length && !isAuthorized; i++) {
        // 3d - Genero un condizionale if riguardo la possibile corrispondenza dei nomi;
        if(nameGuests[i] === userName){
            isAuthorized = true;
        }
    }

    // 3e - Genero un condizionale if sul messaggio da mostrare;
    let content = '';
    if (isAuthorized) {
        content += `<div class="text-success">Puoi partecipare alla festa! :)</div>`;
    } else {
        content += `<div class="text-danger">Spiacente, non puoi partecipare alla festa! :(</div>`;
    }


});


