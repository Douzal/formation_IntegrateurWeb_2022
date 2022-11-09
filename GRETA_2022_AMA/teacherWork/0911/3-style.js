let h1 = document.querySelector('h1');

// propriété style + propriété CSS en camelCase
h1.style.border = '3px solid #373737';
h1.style.backgroundColor = 'orange';

// doc w3schools sur les API javaScript :
// https://www.w3schools.com/jsref/default.asp

// window.getComputedStyle()

getComputedStyle(h1).backgroundColor; 


//  agir sur une liste d'éléments du DOM en même temps 

// document.querySelectorAll('p').style.color = 'red'; ❌

let paras = document.querySelectorAll('p');

for (const para of paras) {
    para.style.color = 'firebrick';
}

paras.forEach(item => {
    item.style.color = 'orange';
});


// spread operator : ...

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let arr1Clone = [...arr1];
let globalArr = [ ...arr1, ...arr2 ];


// certaines listes d'éléments du DOM ressemblent à des tableaux 
// mais beaucoup de méthodes réservées aux tableaux ne peuvent pas être utilisées dessus

document.querySelectorAll('.firstPara');
// --> NodeList(2) [p.firstPara, p.firstPara]
// --> on peut utiliser forEach() 

document.getElementsByClassName('firstPara');
// --> HTMLCollection(2) [p.firstPara, p.firstPara]
// plus performante pour rechercher des classes
// --> on ne peut pas utiliser forEach() 

let firstParas = document.getElementsByClassName('firstPara');

// firstParas.forEach(item => {
//     item.style.color = 'green';
// });

// ❌ Uncaught TypeError: firstParas.forEach is not a function

// on transforme la liste en vrai tableau
firstParas = [...firstParas];  

firstParas.forEach(item => {
    item.style.color = 'green';
});

