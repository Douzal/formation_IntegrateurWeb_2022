
// Créer une fonction permet de réutiliser des instructions plusieurs fois dans avoir à les réécrire
// on place alors ces instructions dans une focntion


// ................................................... //
// function declaration : on peut appeler la fonction partout, même avant sa création
// ................................................... //


sayHello();

console.log('je vais créer une fonction "sayHello"');

function sayHello() {
    console.log('Hello world !');
}

console.log('ma fonction "sayHello" est créée');


sayHello();



// ................................................... //
// function expression : on ne peut l'appeler qu'après sa création
// ................................................... //




// sayGoodBye();

//! Uncaught ReferenceError: Cannot access 'sayGoodBye' before initialization 

// ATTENTION : une erreur dans un script bloque toute la suite du script //

console.log('je vais créer une fonction "sayGoodBye"');

const sayGoodBye = function() {
    console.log('Goodbye !');
}

console.log('ma fonction "sayGoodbye" est créée');

sayGoodBye();



// ................................................... //
// on peut ajouter des paramètres à une fonction
// ................................................... //

console.log('paramètre de la fonction log()');


// exemples de fonctions en CSS :
// @media screen (min-width: 800px) {
    // instructions de la fonction
// }

// clamp(2rem; 4vw; 5rem)


// un paramètre est une variable dynamique
// sa valeur va lui être donnée au moment de l'appel de la fonction

function sayHelloToSomeone(name) {
    console.log(`Hello ${name}` );
}

sayHelloToSomeone();  //  Hello undefined
sayHelloToSomeone('Demba');
sayHelloToSomeone('Yasemin');
sayHelloToSomeone('Lakhdar');


function sayHiToUser(name) {
    document.getElementById('bigTitle').textContent = `Hello ${name}`;
}

let userName = prompt('What\'s your name ?');
sayHiToUser(userName); 


// créer une fonction qui affiche dans la console la somme de 2 nombres passés en paramètres de la fonction

function addNumb(numb1, numb2) {
    console.log(numb1 + numb2);
}

addNumb(5, 10);
addNumb(100, 578);
addNumb(10, 20, 30, 40, 50);  // si d'autres paramètres sont ajoutés, ils seront ignorés


