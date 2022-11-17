function myfunction() {
    // instructions
}


// on peut stocker une fonction anonyme dans une variable //
// c'est à la variable qu'on donne le nom

const myOtherfunction = function() {
    // instructions
}

const myArrowFunction = () => {
        // instructions
}
     


// une fonction est anonyme si elle créée et utilisée au même endroit et au même moment
// on utilise souvent une fonction anonyme :

// dans les callbacks (une fonction est passée en argument d'une autre fonction)
// myArray.forEach( function() { });
// myArray.forEach( () => { });


// dans les gestionnaires d'événements
// myButton.addEventListener('click', function() {});
// myButton.addEventListener('click', () => {});


// on peut utiliser des fonctions nommées pour optimiser la logique des différentes fonctionnalités

function createUserAccount() {
    console.log('user account creation');
};

// on veut exécuter la fonction qu'au moment du click : on y fait référence
// on ne met pas les parentheses sinon elle va s'exécuter tout de suite

createUserBtn.addEventListener('click', createUserAccount)

// 2 logiques : 
// - création de compte
// - réponse au click 


// THIS 


function giveMeThisContext() {
    console.log(this);
}

giveMeThisContext();
//  -->  Window {window: Window, self: Window, document: document, name: '', location: Location, …}

thisBtn.addEventListener('click', giveMeThisContext);
//  --> <button id="thisBtn">this context</button>

// this dans une fonction fléchée n'a pas de contexte
thisArrowBtn.addEventListener('click', () => console.log(this));
//  -->  Window {window: Window, self: Window, document: document, name: '', location: Location, …}


// faire référence à l'élément sur lequel se passe un événement
// avec une fonction fléchée, sans le this
// --> on passe par l'objet Event, avec la propriété target
thisArrowBtn.addEventListener('click', (event) => console.log(event.target));




