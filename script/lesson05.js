'use strict'

let arr = ['132321', '465264', '564654' ,'654841', '6541161', '2313543', '646864'];

arr.forEach((item) => {
    if (item.startsWith('2') || item.startsWith('4')) {
        console.log(item);
    }
});


// Функцию нашел в сети, немного переделал. Думаю, что для 5 урока самому написать такое... нереально!!!
function prime (num) {
    for (let i = 2; i * i <= num; i == 2 ? i++ : i += 2) if (num % i == 0) return false;
    return num > 1;
}

const res = [...Array(101)].reduce((a, _, i) => a.concat(prime(i) ? `Делители числа ${i}: 1 и ${i}` : []) , []).join('\n');

console.log(res);