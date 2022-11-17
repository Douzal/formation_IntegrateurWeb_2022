

// la longueur d'une string

let str = 'word';

str.length; // 4

// une chaine de caractères est itérable (on peut faire une boucle avec)

for (const letter of str) {
    console.log(letter);  // w o r d
}


// includes('str', startindex)  --> boolean

str.includes('o');  // true
str.includes('o', 2)  // false (à partir de l'index 2)
str.includes('x');  // false


// indexOf('str', startindex)

let freedom = 'freedom';
freedom.indexOf('d');  // 4
freedom.indexOf('d', 2);  // 4

let zorro = 'zorro';
zorro.indexOf('o');  // 1  (le premier 'o')
zorro.indexOf('o', 2);  //  4  (le deuxième '0')

zorro.indexOf('x');  // -1



// toLowerCase()   -  toUpperCase()

let minimize = 'MINIMZE';
minimize.toLowerCase(); // 'minimize'

let warning = 'warning';  //  'WARNING'


// slice(startIndex, endIndex)
// extraire une partie de la string sans modifier la string d'origine

let js = 'JavaScript is awesome';
js.slice(4, 10);   // 'Script'
js.slice(4);    // 'Script is awesome'
js.slice(-7);    // 'awesome'

let jsClone = js.slice();


// on peut chaîner les différentes méthodes

js.slice(-7).toUpperCase();  // 'AWESOME'


// replace('before', 'after')

let coding = 'coding is quite hard';
let coolWord = 'cool';

coding.replace('hard', 'easy');  //  'coding is quite easy'
coding.replace('hard', coolWord);  //  'coding is quite cool'

// ne remplace que la 1ere occurrence

let kebabCase = 'change-kebab-case';
kebabCase.replace('-', ' ');  //   'change kebab-case'
kebabCase.replaceAll('-', ' ');  //   'change kebab case'

// avec des regExp

let mrBlue = 'Mr BLUE has a blue house and a blue car';
mrBlue.replaceAll('blue', 'red');   // 'Mr BLUE has a red house and a red car'
mrBlue.replace(/blue/gi, 'red');   // 'Mr red has a red house and a red car'

// NE MODIFIE PAS LA STRING D'ORIGINE


// split(separator)

let java = 'java'; 
java.split();  // ['java']
java.split('');  // ['j','a', 'v', 'a']

let dry = 'do not repeat yourself';
dry.split(' ');   // ['do', 'not', 'repeat', 'yourself']


console.log(dry.split(' '));


