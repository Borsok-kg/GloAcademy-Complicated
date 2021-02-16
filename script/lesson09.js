'use strict'

function timeOut () {

    let days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
        months = ["Январь", "Февраля", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
        myDate = new Date(),
        dataA = document.querySelector('#days_a'),
        dataB = document.querySelector('#days_b'),
        hour = myDate.getHours(),
        minute = myDate.getMinutes(),
        second = myDate.getSeconds();
    
    function declOfNum(number, titles) {  
        let cases = [2, 0, 1, 1, 1, 2];  
        return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];  
    }

    let zero = function(a) {
        if (a < 10) {
            return '0' + a;
        }
        return a;
    };
    
    dataA.innerHTML = `Сегодня ${days[myDate.getDay()]}, ${myDate.getDate()} ${months[myDate.getMonth()]} ${myDate.getFullYear()} года, ${hour} ${declOfNum(hour, ['час', 'часа', 'часов'])} ${minute} ${declOfNum(minute, ['минуты', 'минута', 'минут'])} ${second} ${declOfNum(second, ['секунда', 'секунды', 'секунд'])}`;

    dataB.innerHTML = `${zero(myDate.getDate())}.${zero(myDate.getMonth() + 1)}.${myDate.getFullYear()} - ${zero(hour)}:${zero(minute)}:${zero(second)}`;
}

timeOut();

setInterval(() => timeOut(), 1000);


