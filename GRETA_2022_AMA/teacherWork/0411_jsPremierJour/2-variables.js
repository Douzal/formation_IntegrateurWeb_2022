// EcmaScript 2015
// ES6

// une variable ser à stocker des données

// var  (ancienne syntaxe : à ne pas utiliser)
let myVariable;  // création d'une variable

console.log(myVariable); //existe mais est vide

/*
nommer une variable :
- sensible à la casse
- ne doit pas commencer par un chiffre
- pas d'espace 
- pas de caractères spéciaux(_ , $)
- pas de mot-clé javaScript

- ne commence pas par une majuscule (que dans certains cas)
- le nom doit être le plus compréhensible, évocateur possible
*/


// let first_name_user;
let firstNameUser;

// remplir une variable = initialiser une variable | lui assigner une valeur
firstNameUser = 'Filip';

console.log(firstNameUser);

// mettre à jour une variable
firstNameUser = 'Steve';

console.log(firstNameUser);


// créer une variable et l'initialiser en une seule instruction

// let userPseudo = "XXX", userAge = 16;
let userPseudo = "XXX";
let userAge = 16;

const PI = 3.14116;
// on ne peut pas changer la valeur d'une variable créée avec const
PI = 12;  // ❌ ERROR ❌

