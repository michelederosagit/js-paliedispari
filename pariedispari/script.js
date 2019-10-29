// L’utente sceglie pari o dispari e un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer.
// Sommiamo i due numeri e dichiariamo chi ha vinto.


var parodisp = prompt('Scegli pari o dispari');
var nUsr = parseInt(prompt('Scegli un numero da 1 a 5'));
var nPc = nRandom();
var sumResult = nUsr + nPc;

console.log(parodisp);
console.log(nUsr);

function nRandom(){
    var nRand = Math.floor((Math.random()*5) + 1);
    return nRand;
}

console.log(nPc);
console.log(sumResult);

if ((sumResult % 2 == 0) && parodisp == "pari"){
    console.log("Vince l'utente");
} else if ((sumResult % 2 == 1)  && parodisp == "dispari") {
    console.log("Vince l'utente");
} else {
    console.log("Vince il PC");
}