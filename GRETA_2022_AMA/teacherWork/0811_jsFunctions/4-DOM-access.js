// Document Object MOdel : représentation du document HTML fourni par le navigateur

// document est l'objet qui sert de porte d'entrée au DOM depuis le JS
// il possde des propriétés et des méthodes permettant d'interagir avec le DOM 


// accéder aux éléments du DOM 

// querySelector() s'utilise avec des sélecteurs CSS
// sauf pseuo-élément ::before et ::after

// ne cible que le premier élément correspondant à la sélection

document.querySelector('p');
document.querySelector('main article');
document.querySelector('div:nth-child(even)');
document.querySelector('a[href$=".com"]');


// querySelectorAll() s'utilise avec des sélecteurs CSS
// cible tous les éléments correspondant à la sélection

document.querySelectorAll('p');
document.querySelectorAll('p a');


// getElementById()

document.getElementById('bigTitle');
document.querySelector('#bigTitle');

bigTitle; // juste le nom de l'id cible directement l'id


// getElementsByClassName()

document.getElementsByClassName('para');
document.querySelectorAll('.para');


// getElementsByTagName()

document.getElementsByTagName('p');
document.querySelectorAll('p');


// accéder au texte d'un élément du DOM
// textContent  |  innerText  |  innerHTML 
// pour consulter / modifier / créer le contenu 

document.querySelector('a').textContent; // tout le texte (même invisible)
document.querySelector('a').innerText;  // uniquement le texte visible
document.querySelector('a').innerHTML;  // tout le contenu HTML

document.querySelector('p:last-child').innerHTML = `Venez découvrir des sites incroyables sur le site <a href="https://www.awwwards.com/websites/nominees/">www.awwwards.com </a> !!!`;


// avec un prompt, on ajoute un prénom au <h1> 
// et dans l'id userNameSpan dans le <h2>

let userName = prompt('Comment t\'appelles tu ?');

document.querySelector('h1').textContent += ` ${userName}`;
document.getElementById('userNameSpan').textContent = userName;




