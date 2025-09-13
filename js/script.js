/*Descrizione:
- Visualizzare in pagina 5 numeri casuali. 
- Da lì parte un timer di 30 secondi.
- Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
- Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

NOTA: non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile.

BONUS:
- Inseriamo la validazione: se l'utente mette due numeri uguali o inserisce cose diverse da numeri lo blocchiamo in qualche modo.
- Se l’utente ha inserito qualcosa di non valido, segnaliamolo visivamente nel form.

Consigli del giorno:
- Pensate prima in italiano.
- Dividete in piccoli problemi la consegna.
- Individuate gli elementi di cui avete bisogno per realizzare il programma.
- Immaginate la logica come fosse uno snack: "Dati 2 array di numeri, indica quali e quanti numeri ci sono in comune tra i due array" */


//-- PRENDIAMO GLI ELEMENTI DA HTML E GENERIAMO DELLE COSTANTI --//

const countdown = document.getElementById("countdown");
const listLi = document.getElementById("numbers-list");
const answerForm = document.getElementById("answers-form");
const input = document.querySelectorAll("#input-group input");
const message = document.getElementById("message");
const numberList = document.querySelectorAll("li");


//-- GENERIAMO UN NUMERO RANDOM --//

function randomNumber (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//console.log(randomNumber(0,50));


//-- CREIAMO UNA FUNZIONE CHE GENERI UN ARRAY DOVE INSERIRE I NUMERI RANDOM --//

function randomNumberArray (min, max, numX) {
    let numRandomArray = [];

    while (numRandomArray < numX) {
        const newArray = randomNumber(min, max);

        if (numRandomArray.includes(newArray)) {
            continue
    
        }   else {
                numRandomArray.push(newArray);
        }
    }
    return numRandomArray;

}
//console.log(randomNumber(1, 50, 5))


//-- CREIAMO UNA FUNZIONE PER INSERIRE I NUMERI RANDOM IN HTML --//

let genNumber = [];

for (let i = 0; i < numberList.length; i++) {
    let number = randomNumber(1, 50);
    genNumber.push(number);  
    numberList[i].innerText = number;
}

//-- CREAZIONE DEL COUNTDOWN --//

let seconds = 30;
countdown.innerText = seconds--;

const interval = setInterval(function() {
    if (seconds === 0) {
        clearInterval(interval);
        listLi.classList.add("d-none");
        answerForm.classList.remove("d-none");

    } else {
        countdown.innerText = seconds--;
    }
}, 1000);


//-- INPUT FORM --//

answerForm.addEventListener("submit", function(event) {
    event.preventDefault(); 

    const inputNumbers = [];
    for (let i = 0; i < input.length; i++) {
        const numbersX = Number(inputNumbers[i].value);
        inputNumbers.push(numbersX);
    }

    const numbersTrue = [];
    for (let i = 0; i < inputNumbers.length; i++) {
        const thatNumber = inputNumbers[i];

        if (genNumber.includes(thatNumber)
        && !numbersTrue(thatNumber)) {
        numbersTrue.push(thatNumber);
        }
    }

    if (numbersTrue.length > 0) {
        message.innerText = `Hai indovinato ${numbersTrue.length} numeri, ovvero ${numbersTrue.join}`;
    } else {
        message.innerText = `Mi dispiace, non hai indovinato nessun numero`;
    }
})
