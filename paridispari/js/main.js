"use strict";

//L’utente sceglie pari o dispari
const sceltaUser = prompt("Scegli tra PARI e DISPARI ");
console.log(sceltaUser);
//L’utente sceglie numero da 1 a 5
const numeroUser = Number(prompt("Scegli un numero da 1 a 5"));
console.log("user number " + numeroUser);


//creo numero random del pc
const numberPc = Math.floor(Math.random() * 5 + 1);
console.log("pc number " + numberPc);
