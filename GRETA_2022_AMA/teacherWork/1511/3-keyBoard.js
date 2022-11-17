
// keypress - keydown - keyup

let fruits = document.querySelectorAll('.fruits div');

let fruitName = '';

document.querySelector('input').addEventListener('keyup', event => {
   
    // fruitName += event.key;
    fruitName = event.target.value; // ce qui se trouve dans l'input


    for (const fruit of fruits) {
        if (!fruit.textContent.includes(fruitName) ) {
            fruit.hidden = 'true';
        }
        else {
            fruit.removeAttribute('hidden');
        }
    }

})