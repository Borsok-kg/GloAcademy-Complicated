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

// Lesson03

let lang = 'ru',
    daysWeek = [
          ['Понедельник', 'вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
          ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
    ];

if (lang === 'ru') {
    console.log(daysWeek[0]);
} else {
    console.log(daysWeek[1]);
}

switch (lang) {
    case 'ru':
        console.log(daysWeek[0]);
        break;
    case 'en':
        console.log(daysWeek[1]);
}

let command = length === 'en' ? console.log(daysWeek[1]) : console.log(daysWeek[0]);

let namePerson = 'Артем';

namePerson === 'Артем' ? console.log('директор') : console.log('студент');
namePerson === 'Максим' ? console.log('преподаватель') : console.log('студент');