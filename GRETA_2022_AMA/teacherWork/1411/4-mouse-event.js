


let btn = document.querySelector('button');

btn.onclick = event => event.target.style.backgroundColor = 'orange';
btn.ondblclick = event => event.target.style.backgroundColor = 'green';


btn.onmousedown = event => event.target.textContent = 'mouseDown';
btn.onmouseup = event => event.target.textContent = 'mouseUp';


// mousemove : on peut récupérer les coordonnées de la souris sur l'écran, ou sur un élément //

document.body.onmousemove = event => console.log(event.clientY);


// mousenter  mouseleave
//  mouseover  mouseout

document.querySelector('.board').addEventListener('mouseenter', event => {
    event.target.style.borderColor = 'green';
})

document.querySelector('.board').addEventListener('mouseover', event => {
    document.querySelector('.board span').style.display = 'block';
})

document.querySelector('.board').addEventListener('mouseleave', event => {
    event.target.style.borderColor = 'firebrick';
    document.querySelector('.board span').style.display = 'none';
})