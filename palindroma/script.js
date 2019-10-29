// Una funzione per capire se la parola è palindroma.

// Chiedo all'utente una parola
var usrWord = prompt('Inserisci una parola');

var result = palindroma(usrWord);

function palindroma(usrWord){
    if (usrWord === usrWord.split("").reverse().join("")){
        console.log(usrWord + " è palindroma");
    } else {
        console.log(usrWord + " non è palindroma.")
    }
}