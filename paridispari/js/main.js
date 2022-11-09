"use strict";

//L’utente sceglie pari o dispari
const sceltaUser = prompt("Scegli tra pari e dispari ");
console.log(sceltaUser);
//L’utente sceglie numero da 1 a 5
const numeroUser = Number(prompt("Scegli un numero da 1 a 5"));
console.log("user number : " + numeroUser);


//creo numero random del pc
const numberPc = Math.floor(Math.random() * 5 + 1);
console.log("pc number : " + numberPc);

//capire se somma dei due numeri è pari o dispari
const sommaNumeri = numeroUser + numberPc;
console.log("somma numero : " + sommaNumeri);
// se somma è pari
let sommaPari = (sommaNumeri % 2 === 0);
console.log(sommaPari);

// funzione per il risultato tra pari e dispari

function resultSomma(correctPari){
    let risultato = "";
    if (correctPari){
        risultato = "pari";
    
    } else{
        risultato ="dispari";
    }

    return risultato;
}

const risultatoPari = resultSomma(sommaPari);

function winner (gameUser, check) {
    if (gameUser === check){
        console.log("u won!");
    } else{
        console.log("u lost!");
    }
}
winner(sceltaUser,risultatoPari);
