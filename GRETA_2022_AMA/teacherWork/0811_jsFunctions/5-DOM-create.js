
// créer un élément

let h1 = document.createElement('h1');
h1.textContent = "h1 créé en JavaScript";

let h2 = document.createElement('h2');
h2.textContent = "h2 créé en JavaScript";

let para = document.createElement('p');
para.textContent = "texte du footer";

let footerLink = document.createElement('a');


// ajouter l'élément au DOM
// prepend()  -  append()  - appendChild()

// prepend : placé en tant que premier enfant
document.querySelector('main').prepend(h1);

// append : placé en tant que dernier enfant
document.querySelector('main').append(h2);  

footerLink.append('un lien dans mon footer')
document.querySelector('footer').append(para, footerLink);


// before()  -  after()  -  insertBefore()
// pour place un élément avant ou après un élément

let h3 = document.createElement('h3');
h3.textContent = 'mon h3 généré depuis mon script';

let ul = document.createElement('ul');

// place le h3 avant le paragraphe
document.getElementById('originalPara').before(h3);

// place le ul après le paragraphe
document.getElementById('originalPara').after(ul);

let fruits = ['🍌', '🍒', '🍓', '🍉', '🍏', '🍇'];

for (const fruit of fruits) {
    // let li = document.createElement('li');
    // li.textContent = fruit;
    // ul.append(li);
    ul.innerHTML += `<li>${fruit}</li>`
}

// insertAdjacentElement()
// 2 paramètres : mot-clé + élément à ajouter 
// mots-clés =  beforebegin  |  afterbegin  |  beforeend  |  afterend
 
let button1 = document.createElement('button');
button1.textContent = 'beforebegin';
document.querySelector('article').insertAdjacentElement('beforebegin', button1);


let button2 = document.createElement('button');
button2.textContent = 'afterbegin';
document.querySelector('article').insertAdjacentElement('afterbegin', button2);

let button3 = document.createElement('button');
button3.textContent = 'beforeend';
document.querySelector('article').insertAdjacentElement('beforeend', button3);

let button4 = document.createElement('button');
button4.textContent = 'afterend';
document.querySelector('article').insertAdjacentElement('afterend', button4);


// replaceChild(ancien-enfant, nouvel-enfant)

let newH1 = document.createElement('h1');
newH1.textContent = "H1 REMPLACANT";

let oldH1 = document.querySelector('h1');

console.log(oldH1, newH1);

document.querySelector('main').replaceChild(oldH1, newH1);
