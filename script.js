'use strict';

//STEP 1: request name, surname and color with a prompt
//STEP 2: Generate the result that merge all the variables 
//STEP 3: print in console log and on screen



let name = prompt("Inserisci il tuo nome:");
let surname = prompt("Inserisci il tuo cognome:");
let color = prompt("Inserisci il tuo colore preferito:");
let result = name + " " + surname + " " + color;


//Print on screen
document.write(result);

//Print on console
console.log(result)
