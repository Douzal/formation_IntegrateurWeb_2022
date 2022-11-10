$(document).ready(() => {
    console.warn('yo jQuery');

    // EX 1 - CREATE ARTICLES
    function ex1() {
        let articles = document.querySelector('#articles');
        let btn = document.querySelector('#ex1Btn');
        let count = 0;
        btn.addEventListener('click', () => {
            console.log('click');
            btn.style.visibility = 'hidden';
            count = prompt('Combien d\'articles créer ?', 4);
            while (count == '' || isNaN(count) || count == null) {
                count = prompt('SVP - Combien d\'articles créer ?');
            }
            createArticles(count, articles);
        });
    }
    ex1();

    // EX 2 - GUESS NUMBER
    /*
    ● Choisir un nombre secret à faire deviner
    ● Afficher une pop-up demandant de trouver ce nombre, en donnant un intervalle
    ● Quand un nombre est saisi : une nouvelle pop-up apparaît en précisant si le nombre
    proposé est trop grand ou trop petit
    ● Demander de saisir un nouveau nombre (dans la même pop-up)
    ● Répéter le script jusqu'à ce que le nombre secret soit trouvé
    ● Afficher alors une pop-up avec un message de félicitations*/
    function ex2() {
        let btn = document.getElementById('ex2Btn');
        let min = 0, max = 50;
        let magicalNumer = getRandomInt(min, max);
        let count = 1;

        btn.onclick = () => {
            count = 1;
            console.warn(`Ex 2 - Number to guess : ${magicalNumer}`);
            let choice = prompt('Choix d\'un nombre entre ' + min + ' et ' + max);
            while (!isValidNumber(choice, min, max)) {
                choice = prompt('Nombre svp, et dans l\interval [' + min + ';' + max + ']');
            };

            let checkAnswer = evaluateNumber(choice, magicalNumer);
            while (!checkAnswer['trouve']) {
                alert(checkAnswer['phrase']);
                choice = prompt('Choix d\'un nombre entre ' + min + ' et ' + max + '\nnb : ' + checkAnswer['phrase'] + ' que ' + choice);
                checkAnswer = evaluateNumber(choice, magicalNumer);
                count++;
            }

            alert(checkAnswer['phrase'] + '\nVous avez trouvé en ' + count + ' tentative(s) :)');

        }
    }
    ex2();

    // EX 3 - MASK / DISPLAY LIST
    /*
    ● Créer une page HTML avec un bouton et une liste en dessous
    ● Le bouton comporte au départ le texte "Mask List"
    ● Quand on clique dessus, son texte devient "Display List" et la liste en-dessous disparaît
    ● Quand on re-clique dessus, son texte redevient "Mask List" et la liste réapparaît en-dessous */
    function ex3() {
        let btn = document.getElementById('ex3Btn');
        btn.onclick = () => {
            //TODO display ou pas le HTML adéquat à l'exercice
        }
    }
    ex3();

    // EX 4 - COLOR ME
    /*
    ● Dans une page HTML, créer 3 boutons de 3 couleurs différentes
    ● Ajouter un paragraphe et un bouton reset
    ● Quand on clique sur un des boutons de couleur, le paragraphe prend la même couleur de
    background et la même couleur de police que le bouton cliqué
    ● Quand on clique sur le bouton reset, les changements sont annulés */
    function ex4() {
        let btn = document.getElementById('ex4Btn');
        btn.onclick = () => {

        }
    }
    ex4();


    // reload button
    $('#reload').click(() => location.reload());

    // fonctions auxiliaires
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
    }
    function createArticles(count, articles) {
        // Les articles sont créés : chaque article comporte un titre, un paragraphe et une image
        for (let i = 0; i < count; i++) {
            let article = document.createElement('article');
            let title = document.createElement('h1');
            title.textContent = 'Titre ' + (i + 1);
            let par = document.createElement('par');
            // par.setAttribute('');
            par.textContent = 'Paragraphe avec du lorem ' + 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea tempora illum tenetur reprehenderit odio possimus!';
            let img = document.createElement('img');
            img.setAttribute('alt', 'une image random');
            img.setAttribute('src', 'https://picsum.photos/' + getRandomInt(100, 200));

            article.append(title, par, img)
            article.classList.add('article'); // element.classList.add("my-class");
            articles.appendChild(article);


        }
    }
    function isValidNumber(choice, min, max) {
        return !(choice == null || choice.trim() == '' || isNaN(choice) || choice < min || choice > max)
    }
    function evaluateNumber(choice, magicalNumer) {
        if (choice == magicalNumer) {
            return { trouve: true, phrase: 'Bravo vous avez trouvé !' };
        } else if (choice < magicalNumer) {
            return { trouve: false, phrase: 'C\'est plus !' };
        } else {
            return { trouve: false, phrase: 'C\'est moins !' };
        }
    }
})