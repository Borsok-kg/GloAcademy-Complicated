'use strict'

const multiplication = (number, number2) => number * number2;
let num = 266219;

num = num.toString().split('');

let numMul = num.reduce(multiplication);

console.log(numMul);

numMul **= 3;

numMul = String(numMul);

let twoNum = numMul.substring(0, 2);

console.log(twoNum);