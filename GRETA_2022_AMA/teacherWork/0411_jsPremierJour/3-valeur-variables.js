
// types des données à stocker dans uen variable

// .................................................... //
// ... string (chaînes de caractères) = du texte  ... //
// .................................................... //


let str = 'string between single quotes';
let str2 = "string between double quotes";

let pseudo = 'tony76';
let lettersNumber = '43';  // ce n'est pas un nombre mais une chaîne de string (on ne pas faire de calculs avec)
let mathString = "15 / 45 * 12";

// typeof permet de connaître le type de la valeur stockée dans une variable

typeof pseudo;  // string
typeof(lettersNumber);  // string

// si on veut utiliser des guillemets à l'intérieur d'une string, il faut les "échapper" avec un anti-slash \ (alt gr + 8)
let phrase = 'Je m\'appelle Philippe';
let phrase2 = "Je m'appelle \"Philippe\" ";

// concaténation (mettre bout à bout des strings) avec le +
let myFirstName = 'Filip';
let myLastName = 'Lanou';

let greeting = 'Bonjour, je m\'apppelle ' + myFirstName + ' ' + myLastName;

// nouvelle syntaxe ES6 : les backticks (altgr + 7)
let greeting2 = `Bonjour, je m'appelle ${myFirstName} ${myLastName}`;



// .................................................... //
// ...  number  ... //
// .................................................... //

let myAge = 34;
typeof myAge;  //  number

let calcul = (4 + 4) * 2;  // 16


let password = 'pass';
password = 10 + password + calcul;  // 10pass16

// dès qu'on utilise le + avec une string, s'il y a des numbers avant ou après, il seront transformés en string et ajoutés à la string


let halfFive = 2.5; // dans les nombres, les virgules sont écrites avec un point

"4" * 2; // 8
"quatre" * 2;  // NaN  (Not a Number) 
// mathématiquement ça n'est pas possible (il y a autre chose que des nombres)

// opérateurs mathématiques : + - * / %

// modulo % sert à identifier si un nombre est multiple d'un autre (par exemple pair ou impair)


// combiner opération mathématique et assignation à une variable
let numb1 = 10;
numb1 = numb1 + 5; // 10 + 5 = 15

let numb2 = 20;
numb2 += 5; // 20 + 5 = 25
numb2 *= 4;  //  25 * 4 = 100


// incrémentation et décrémentation
let compteur = 0;
// compteur = compteur + 1;
// compteur +=1;
compteur++;  // 1

console.log(compteur++);  // 1 (ça affiche puis ça incrémente)
console.log(compteur);  // 2
console.log(++compteur);  // 3


// compteur = compteur - 1;
// compteur -= 1;
compteur--;


// bigint (pour les très très grands nombres)


// .................................................... //
// ...  boolean  ... //
// .................................................... //

/* 
true ou false

par défaut toutes les valeurs valent true;
sauf 6 valeurs : 
false - null - 0(zéro) - undefined - NaN - "" (string vide)
*/

let boolean = true; // sans guillemets


// .................................................... //
// ...  undefined  ... //
// .................................................... //

// type de valeur par défaut quand rien n'a été assigné à une variable

let noValue;  // undefined 

// Ne pas confondre avec "is not defined" : erreur donnée par JS quand on parle d'une variable qui n'existe pas

// ✅ undefined : variable vide
// ❌ is not defined : variable inexistante



// .................................................... //
// ...  null  ... //
// .................................................... //

// valeur donnée à une variable en attendant de lui donner autre chose
// cette valeur peut être donnée par JS quand la variable ne fait référence à rien de connu 

document.getElementById('titre'); // null (l'élément n'existe pas)

// null est la réponse donnée par JS quand il ne trouve pas un élément dans le document HTML
// si on essaie de réaliser une action sur élément dont la valeur est "null", on aura une erreur




// .................................................... //
// ...  object  ... //
// .................................................... //

let myArray = ['Filip', 34, true, myLastName, [1,2,3]];

typeof myArray  // object

// un array est un tableau. il permet de stocker différentes valeurs (tous les types de valeur sont possibles)

let today = new Date();
typeof today // object 


let person = {
    nom: 'Lanou',
    prenom: 'Philippe',
    age: 34,
    dev: true,
    fruits: ['mangue', 'kaki', 'litchee']
};

typeof person // object



// .................................................... //
// ...  function  ... //
// .................................................... //

let myFunction = function() {};

typeof myFunction // object


// .................................................... //
// ...  symbol  ... //
// .................................................... //

