
let main = document.querySelector('main');

let oldH1 = document.querySelector('h1');

let newH1 = document.createElement('h1');
newH1.textContent = 'nouveau h1';


// parent.replaceChild(newChild, oldChild);

main.replaceChild(newH1, oldH1);



// removeChild()

main.removeChild(document.querySelector('p'));


// remove()

document.querySelector('img').remove();


