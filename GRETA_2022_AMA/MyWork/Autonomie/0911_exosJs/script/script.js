$(document).ready(() => {
    console.warn('yo jQuery');

    // EX 1 - CREATE ARTICLES
    function ex1() {
        let articles = document.querySelector('#articles');
        let btn = document.querySelector('#ex1Btn');
        let count = 0;

        if (missingContent(btn, 'ex1') || missingContent(articles, 'ex1')) {
            return;
        };

        btn.addEventListener('click', () => {
            resetContent();
            btn.style.visibility = 'hidden';
            count = prompt('Combien d\'articles créer ?', 4);
            while (!isValidInput(count)) {
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

        if (missingContent(btn, 'ex2')) {
            return;
        };

        btn.onclick = () => {
            resetContent();
            count = 1;
            console.warn(`Ex 2 - Number to guess : ${magicalNumer}`);
            let choice = prompt('Choix d\'un nombre entre ' + min + ' et ' + max);
            while (!isValidNumber(choice, min, max)) {
                choice = prompt('Nombre svp, et dans l\interval [' + min + ';' + max + ']');
            };
            let savChoice = choice;
            let checkAnswer = evaluateNumber(choice, magicalNumer);
            // console.dir(checkAnswer);
            while (!checkAnswer['trouve']) {
                alert(checkAnswer['phrase']);
                choice = prompt('Choix d\'un nombre entre ' + min + ' et ' + max + '\nnb : ' + checkAnswer['phrase'].substring(0, 11) + ' que ' + choice);
                while (!isValidNumber(choice, min, max)) {
                    choice = prompt('Nombre svp, et dans l\interval [' + min + ';' + max + ']' + '\nnb : ' + checkAnswer['phrase'].substring(0, 11) + ' que ' + savChoice);
                };
                savChoice = choice;
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
        let content = document.getElementById('ex3');

        if (missingContent(btn, 'ex3') || (missingContent(content, 'ex3'))) {
            return;
        };

        let count = 0;
        btn.onclick = () => {
            resetContent();
            content.innerHTML = '<ol id="ex3list"><li>Item 1</li><li>Item 2</li><li>Item 3</li></ol>';
            let ex3List = document.querySelector('#ex3list');
            count++;
            if (count % 2 == 0) {
                btn.innerHTML = 'Display list';
                // ex3List.style.visibility = 'hidden';
                ex3List.style.display = 'none';

            } else {
                btn.innerHTML = 'Mask list';
                // ex3List.style.visibility = 'visible';
                ex3List.style.display = 'block';
                // content.innerHTML = '';
            }

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
        let content = document.querySelectorAll('#ex4')[0];

        if (missingContent(btn, 'ex4') || missingContent(content, 'ex4')) {
            return;
        };

        btn.onclick = () => {
            resetContent();
            let arrBtn = createBtn(3);
            console.warn(arrBtn);
            // for (let b in arrBtn) {
            //     console.log((b));
            //     content.append(b);
            // }
            //content.append(createBtn(3));
            // let btn = createBtn(1);
            // console.log(btn);
            // content.append(btn);

            // create p
            let p = document.createElement('p');
            p.style.border = '1px solid white';
            p.style.height = '200px';
            p.style.textAlign = 'center';
            p.style.color = 'white';
            p.id = 'parEx4';
            p.style.fontFamily = 'verdana';
            let baseColor = p.style.backgroundColor;
            // p.style.justifyContent = 'center';
            p.textContent = 'Paragraphe généré en javascript';
            content.append(p);

            let clearBtn = document.createElement('button');
            clearBtn.innerHTML = 'Reset';
            clearBtn.onclick = () => {
                p.textContent = 'Paragraphe généré en javascript';
                p.style.background = baseColor;
            }
            content.append(clearBtn);
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
    // this functions returns true if value is a number
    function isValidInput(input) {
        return !(input == null || isNaN(input) || input.trim() == '');
    }
    function isValidNumber(choice, min, max) {
        return !(!isValidInput(choice) || choice < min || choice > max)
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
    function createBtn(num) {
        let arrBtn = [];
        for (let i = 0; i < num; i++) {
            let btn = document.createElement('button');
            btn.innerHTML = 'color ' + i;
            let rand1 = getRandomInt(0, 255);
            let rand2 = getRandomInt(0, 255);
            let rand3 = getRandomInt(0, 255);
            let col = `RGB(${rand1}, ${rand2}, ${rand3})`;
            btn.style.background = col;
            btn.onclick = () => {
                let p = document.querySelector('#parEx4');
                p.style.background = col;
                p.innerHTML = `Paragraphe généré en javascript<br><br>Col : ${col}`
            }
            $('#ex4').append(btn);
            arrBtn.push(btn);
        }
        console.log(`arrBtn : ${arrBtn}`);
        return arrBtn;
    }
})