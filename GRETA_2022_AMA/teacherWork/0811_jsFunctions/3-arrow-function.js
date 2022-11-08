

function addNumb(numb1, numb2) {
    console.log(numb1 + numb2);
}


const addNumb1 = function (numb1, numb2) {
    console.log(numb1 + numb2);
}


// fonction fléchée | arrow function

const addNumb2 = (numb1, numb2) => {
    console.log(numb1 + numb2);
};

// si la fonction ne comporte qu'une seule instruction
// on peut enlever les accolades et tout mettre sur la même ligne

const addNumb3 = (numb1, numb2) => console.log(numb1 + numb2);


// si la seule instruction de la fonction est un return
// on peut se passer du mot-clé return 
// pour javaScript, une fonction devrait toujours retourner quelquechose

const addNumb4 = (numb1, numb2) => numb1 + numb2;


// si la fonction ne prend qu'un seul paramètre
// on peut enlever les parenthèses autour du paramètre

const noParameter = () => console.log('pas de paramètres');

const sayHi = name => console.log('Hi ' + name);


