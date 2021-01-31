'use strict'

const multiplication = (number, number2) => number * number2;
let num = 266219;

num = num.toString().split('');

num = num.reduce(multiplication);

num **= 3;

num = String(num);

console.log(num.substring(0, 2));