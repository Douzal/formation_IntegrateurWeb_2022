
// hasAttribute(attributeName) --> boolean

document.querySelector('h1').hasAttribute('src');  // false
document.querySelector('h1').hasAttribute('title');  // true

// propriétés attributes  

document.querySelector('img').attributes;
// --> NamedNodeMap {0: src, 1: alt, 2: loading, 3: title, src: src, alt: alt, loading: loading, title: title, length: 4}

let attrList = document.querySelector('img').attributes;

for (let attr of attrList) {
    console.log(attr, attr.value);
}

// getAttribute()  -  setAttribute()

document.querySelector('img').getAttribute('src');
// --> 'https://picsum.photos/400/200?grayscale'

document.querySelector('img').setAttribute('src', 'https://picsum.photos/400/200?blur');  // change la valeur de l'attribut

document.querySelector('img').setAttribute('hidden', 'true');
// ajoute un attribut


// removeAttribute()
document.querySelector('h2').removeAttribute('hidden');

// toggleAttribute()
document.querySelector('h3').toggleAttribute('hidden');
// document.querySelector('button').toggleAttribute('disabled');
// switch entre la présence et l'absence d'un attribut



// create attributes
let img = document.createElement('img');
img.src = 'flowers.jpg';
img.width = '500';

let mdnLink = document.createElement('a');
mdnLink.textContent = 'MDN';
mdnLink.href = 'https://developer.mozilla.org/en-US/docs/Web/API/Element/replaceChildren';

document.querySelector('main').append(img, mdnLink);

// id et class 
document.querySelector('main').id; // consulter un id 
document.querySelector('main').id = 'newID'; // ajouter ou modifier un id 

// className donne une string contenant la valeur de l'attribut class
document.querySelector('main').className; // --> 'container mainContent'

// donne un objet avec la liste des classes de l'élément
document.querySelector('main').classList;
// --> DOMTokenList(2) ['container', 'mainContent', value: 'container mainContent']


// classList possède 3 méthodes : add / remove / toggle

document.querySelector('button').classList.add('btn');
document.querySelector('button').classList.remove('btn');
document.querySelector('button').classList.toggle('btn');
