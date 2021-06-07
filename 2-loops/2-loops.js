"use strict";

let composers = [
    'Mozart',
    'Debussy',
    'Juul',
    'Ravel',
    'Berlioz',
    'Schumann',
];
console.log("boucle for")
for (let i = 0; i < composers.length; i++) {
    console.log('compositeur : ' + i + ' : ' + composers[i]);
}
console.log("boucle for of")
let i = 0;
for (const composer of composers) {
    console.log('compositeur : ' + i + ' : ' + composer);
    i++;
}

console.log("Boucle while")

let j = 0;
while (j < composers.length) {
    console.log('compositeur : ' + j + ' : ' + composers[j]);
    j++;
}

let possibleValues = [6, 7, 8, 9, 10 , 11 , 12];
let userInput = null;
while (isNaN(userInput) || possibleValues.indexOf(parseInt(userInput)) < 0) {
         userInput = prompt('Écrivez un nombre entre 6 et 12 (inclus)');
     }
     console.log(composers[userInput-6]);