"use strict";
// Chiedere all’utente di inserire una parola
const parola = prompt("Inserisci una parola:");

console.log(parola);

// Creare una funzione per capire se la parola inserita è palindroma
function parolaReverse (parola) {

    let reverse = "";

    for (let i = parola.length - 1; i>=0; i--) {
        reverse += parola[i];
    }
    
    if (parola === reverse){
        return true;
    }
    return false;
}

console.log("La parola è palindroma?", parolaReverse(parola));