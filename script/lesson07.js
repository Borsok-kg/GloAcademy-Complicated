'use strict'

let week = ['Понедельник', 'вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    day = document.querySelector('#days'),
    toDay = new Date();


let dayFunction = function() {
    week.forEach(function(item, i) {
        // Создаем обертку для каждого дня
        let wrapper = document.createElement('div');
    
        // Делаем текущий день жирным
        if (i === +toDay.getDay()-1) {
            wrapper.classList.add('bold');
            wrapper.textContent = week[i];
        }
    
        // Делаем выходные курсивом и выводим остальные дни
        if (item === 'Суббота' || item === 'Воскресенье') {
            wrapper.classList.add('italic');
            wrapper.textContent = week[i];
        } else {
            wrapper.textContent = week[i];
        }
    
        // 
        day.appendChild(wrapper);
    });
};

dayFunction();