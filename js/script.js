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
const numberList = document.getElementById("numbers-list");
const answerForm = document.getElementById("answers-form");
const input = document.querySelectorAll("#input-group input");
const message = document.getElementById("message");

//-- GENERIAMO UN NUMERO RANDOM --//

function randomNumber (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(randomNumber(0,50));

//-- CREIAMO UNA FUNZIONE CHE GENERI UN ARRAY DOVE INSERIRE I NUMERI RANDOM --//

function randomNumberArray (min, max, numX) {
    let numRandomArray = [];

    for (let i = 0; i < numX; i++) {
        let newArray = numRandomArray (min, max);

        if (numRandomArray.includes(newArray)) {
            continue
    
        }   else {
                numRandomArray.push(newArray);
        }
    }
    return numRandomArray;

}






/*  1 - VISUALIZZARE IN PAGINA 5 NUMERI CASUALI:
        - creare una funzione che generi (5) numeri casuali
        - inseriamo i numeri in un array
        - assegnarla all'interno degli <li> presenti nell'html       

    2 - DA Lì PARTE UN TIMER DI 30 SECONDI:
        - impostare setInterval per 30 secondi

    3 - DOPO 30 SECONDI I NUMERI SCOMPAIONO E APPAIONO INVECE 5 INPUT IN CUI L'UTENTE DEVE INSERIRE I NUMERI CHE HA VISTO PRECEDENTEMENTE, NELL'ORDINE CHE PREFERISCE
        - display.none del timer (?) 
        - display.block dei form per l'inserimento delle cifre (input)

    4 - DOPO CHE SONO STATI INSERITI I 5 NUMERI, IL SOFTWARE DICE QUANTI E QUALI NUMERI DA INDOVINARE SONO STATI INDIVIDUATI
        - creare un array con i numeri inseriti
        - creare una funzione che paragona i numeri generati casualmente con quelli inseriti (Array)
        - stampa del risultato in pagina di quanti e quali numeri */