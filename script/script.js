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

let lang = 'en',
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

lang === 'en' ? console.log(daysWeek[1]) : console.log(daysWeek[0]);

let namePerson = 'Артем';

console.log((namePerson === 'Артем' ? 'директор' : namePerson === 'Максим' ? 'преподаватель' : 'студент'));

// Lesson04
function stringFunction (i) {
    if (i === Number(i)) {
        console.log('Число не допустимо');
    } else {
        console.log( i = i.trim().slice(0, 30) + '...');
    }

   
}

stringFunction('   123456789101234567891012345678910   ');
