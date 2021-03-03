'use strict'

const wrapper = document.querySelector('.wrapper'),
      title = document.querySelector('#color'),
      button = document.querySelector('#change');

button.addEventListener('click', function() {
    let  color = '#' + Math.random().toString(16).slice(3, 9);
    wrapper.style.backgroundColor = color;
    title.innerHTML = color;
});