"use strict";

let tableau = [
    'test',
    42,
    0.0
]

tableau.push('nouvelle valeur');
console.log(tableau.indexOf('test'));

function add(x, y) {
    if (isNaN(x) || isNaN(y)) {
        return 0;
    }

    return x + y;
}

console.log(add(4 , 3));

function affine(x, y) {
    if (isNaN(x) || isNaN(y)) {
        return 0;
    }

    if (x < 12) {
        return (3 * x) + (6 * y) + 2;
    } else if (y >= 16) {
        return (3 * x) - (2 * y) + 12
    }

    return (2 * x) + (2 * y) + 2;
}

console.log(affine(3,4));
console.log(affine(15,16));
console.log(affine(13,10));