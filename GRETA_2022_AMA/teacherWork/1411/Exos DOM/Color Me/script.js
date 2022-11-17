

let buttons = [...document.getElementsByClassName('btn-color')];
let para = document.querySelector('p');

buttons.forEach(item => {
    item.addEventListener('click', (event) => {

        para.style.backgroundColor = getComputedStyle(event.target).backgroundColor;
        para.style.color = getComputedStyle(event.target).color;

    })
})

document.querySelector('.btn-reset').onclick = () => para.removeAttribute('style');