$(document).ready(() => {

    // EX 1 - Index Of
    /* Créer une fonction qui prend 2 paramètres : un mot et une lettre à trouver dans le mot
    - Si la lettre est présente, la fonction renvoie l’index de la lettre dans le mot
    (index de la 1ère lettre trouvée si la lettre est présente plusieurs fois)
    - Si la lettre n’est pas présente, la fonctionne renvoie -1 */
    function ex1() {
        let btn = document.querySelector('#indexOf');
        let div = document.querySelector('#articles');
        if (missingContent(btn, 'indexOf()') || missingContent(div, 'indexOf()')) {
            return;
        };

        let mot = 'Lasagnes', l = 'a';

        btn.addEventListener('click', () => {
            resetContent();
            let index = indexOf(mot, l);
            if (index != -1) {
                console.warn(`'${l}' est en ${index}ième position dans '${mot}'.`);
            } else {
                console.error(`Aucune occurence de '${l}' dans '${mot}'.`);
            }
        });
    }
    ex1();

    // EX 2 - CHECK FINAL 's'
    /* Créer une fonction qui prend un mot en paramètre
    - La fonction doit vérifier si le mot se termine par la lettre “s”
    - La fonction doit renvoyer un booléen (true si le mot se termine par un "s" et false dans le
    cas contraire) */
    function ex2() {
        let btn = document.querySelector('#checkFinalS');
        if (missingContent(btn, 'checkFinalS()')) {
            return;
        };

        btn.addEventListener('click', () => {
            resetContent();
            let mot = 'mot doux';
            let finalS = checkFinalS(mot);
            if (finalS == true) {
                console.warn(`'${mot}' termine par un 's'.`);
            } else {
                console.warn(`'${mot}' ne termine PAS par un 's'.`);
            }
        });
    }
    ex2();

    // EX 3 - CAPITALIZE WORDS
    function ex3() {
        let btn = document.querySelector('#capitalize');
        if (missingContent(btn, 'capitalize()')) {
            return;
        };

        btn.addEventListener('click', () => {
            resetContent();
            let phrase = 'unE    pHrAse avEC   plEin de MotS.  ';
            phrase = capitalize(phrase);
            console.log(phrase);
        });
    }
    ex3();

    // EX 4 - CHECK PALINDROME
    /* - Créer une fonction qui prend un mot en paramètre.
    - La fonction doit vérifier si ce mot est ou non un palindrome
    (mot qui peut être lu dans les deux sens. Exemple : kayak)
    - La fonction renvoie un booléen (true si c'est un palindrome, false si ce n'est pas un
    palindrome) */
    function ex4() {
        let btn = document.querySelector('#palindrome');
        if (missingContent(btn, 'checkPalindrome()')) {
            return;
        };

        btn.addEventListener('click', () => {
            resetContent();
            let mot = 'kayask';
            let palin = checkPalindrome(mot);
            palin ? console.log(`${mot.toUpperCase()} est un palindrome 😎`) : console.log(`${mot} n'est PAS un palindrome 😨`);
        });
    }
    ex4();

    // EX 5 - FIZZ BUZZ
    /* Créer une boucle de 0 à 50 inclus
    - Afficher chaque numéro dans la console
    - Si le numéro est multiple de 3 : on affiche "fizz" au lieu du numéro
    - Si le numéro est multiple de 5 : on affiche "buzz" au lieu du numéro
    - Si le numéro est multiple de 3 et 5 : on affiche "fizzbuzz" au lieu du numéro */
    function ex5() {
        let btn = document.querySelector('#fizz');
        if (missingContent(btn, 'Fizz Buzz')) {
            return;
        };

        btn.addEventListener('click', () => {
            resetContent();
            fizzBuzz(50);

        });
    }
    ex5();

    // EX 6 - FIND MAX
    /* - Créer une fonction prenant 3 nombres en paramètres
    - Cette fonction doit retourner le plus grand des trois */
    function ex6() {
        let btn = document.querySelector('#max');
        if (missingContent(btn, 'findMax()')) {
            return;
        };

        btn.addEventListener('click', () => {
            resetContent();
            let a = 511, b = 111, c = 12;
            let max = findMax(a, b, c);
            console.log(`Le maximum entre ${a}, ${b} et ${c} est ${max}.`);
        });
    }
    ex6();

    // SQUELETTE
    // ex1();
    // function ex55() {
    //     let btn = document.querySelector('#indexOf');
    //     if (missingContent(btn, 'indexOf()')) {
    //         return;
    //     };

    //     btn.addEventListener('click', () => {
    //         resetContent();

    //     });
    // }
    // ex1();


    // reload button
    $('#reload').click(() => location.reload());

    // fonctions auxiliaires
    function resetContent() {
        console.clear();
        document.querySelector('#articles').innerHTML = '';
        document.getElementById('ex3').innerHTML = '';
        document.querySelector('#ex1Btn').style.visibility = 'visible';
        document.querySelectorAll('#ex4')[0].innerHTML = '';
    }
    // returns false if the content exist, else true (+log err)
    function missingContent(content, numEx) {
        if (!content) {
            console.error(`Erreur : ${numEx} impossible à mettre en place`);
            return true;
        }
        return false;
    }
    function indexOf(mot, a) {
        let arr = [...mot];
        let index = 0;
        for (const i of arr) {
            index++;
            if (i == a) {
                return index;
            }
        }
        return -1;
    }
    function checkFinalS(mot) {
        let arr = [...mot];
        let length = arr.length;
        let lastLetter = arr[length - 1];
        return (lastLetter == 's');
    }
    function checkPalindrome(mot) {
        mot = mot.toUpperCase();
        let arr = [...mot];
        let lenght = arr.length;
        let palin = true;
        for (let i = 0; i < Math.round(lenght / 2); i++) {
            // console.warn(`arr[i] : ${arr[i]}\narr[lenght - i] : ${arr[lenght - i - 1]}`);
            if (arr[i] != arr[lenght - i - 1]) {
                palin = false;
                return palin;
            }
        }
        return palin;
    }
    function fizzBuzz(i) {
        for (let j = 1; j < i; j++) {
            if (j % 3 == 0) {
                if (j % 5 == 0) {
                    console.error(`FIZZBUZZ (${j})`);
                } else {
                    console.warn(`buzz (${j})`);
                }
            } else if (j % 5 == 0) {
                console.warn(`buzz (${j})`);
            } else {
                console.log(j);
            }
        }
    }
    function findMax(a, b, c) {
        let max = a;
        if (max <= b) {
            max = b;
        }
        if (max <= c) {
            max = c;
        }
        return max;
    }
    function capitalize(phrase) {
        console.error(phrase);
        phrase = phrase.toLowerCase();
        const arr = [...phrase];
        if (arr.length == 0) {
            return 'Pas bien.';
        } else {
            let newPhrase = '';
            let maj = true;
            for (const lettre of arr) {
                maj == true ? (newPhrase += lettre.toUpperCase()) : (newPhrase += lettre);
                if (lettre == ' ') {
                    maj = true;
                } else {
                    maj = false;
                }
            }
            return suppEspaces(newPhrase);
        }
    }
    function suppEspaces(phrase) {
        const arr = [...phrase];
        // let n = 0;
        if (arr.length == 0) {
            return 'Pas bien.';
        } else {
            let newPhrase = '';
            let espace = false;
            for (const lettre of arr) {
                // n <= 1 ? (newPhrase += lettre) : '';
                // if(n<=1) {
                //     newPhrase += lettre;
                // } else {

                // }
                if (!espace && lettre == ' ') {
                    console.error(`${lettre} // newPhrase : ${newPhrase}`);
                    // n++;
                    espace = true;
                } else {
                    newPhrase += lettre;
                    espace = false;
                }
            }
        }
        return phrase;
    }
})