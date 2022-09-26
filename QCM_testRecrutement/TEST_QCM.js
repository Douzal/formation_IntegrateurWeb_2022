$(function() {
    'use strict';
    console.warn('QCM Greta');

     function q10 () {
        let i = 1;
        let pr = 1;
        let so = 0;
        while(i<=4) {
            pr = i*pr;
            so = so+pr;
            i++;
        }
        console.warn(`Pr : ${pr}, somme : ${so}, i : ${i}`); 
    }

    function q16() {
        let chaine="je vais au marché ce soir.";
        // car=lire(chaine,0) : permet de lire le caractère numéro 0 de la chaine et l’écrit dans la variable car : on obtient j c'est à dire 'j'
        let car = lire(chaine, 0);
        // console.warn(car);
        car = lire(chaine, 3);
        // console.warn(car);
        car = lire(chaine, 2);
        console.warn(car);
    }

    // q16();

    function lire(ch, ind) {
        return ch.charAt(ind);
    }

    function q16bis(chaine) {
        let i=0;
        let car = lire(chaine, i);
        let compt = 0;
        let nbBigBoucle = 0;
        while (car!="."){
            // console.warn(`i : ${i}\ncar : ${car}\ncompt : ${compt}`);
            // 1 - find &nbsp
            while(car !=" " && car!=".") {
            // while(car !=" ") {
                i++;
                car = lire(chaine, i);
            }
            compt++;
            //2 - ignore les espaces
            while(car==" ") {
                i++;
                car = lire(chaine, i);
            }
        }
        return compt;
    }
    // console.warn(`nb mots : ${q16bis("Salut Aldous.")}`);

    $('#btn').on('click', function() {
        let phrase = prompt("Quelle phrase voulez-vous compter ?", "Salut Aldous, je t'aime.");
        if(phrase.charAt(phrase.length-1)!='.') {
            phrase = phrase+'.';
            console.log('pas bien ajout d\'un point.');
        }
        phrase = `nb mots dans la phrase : "${phrase}" : ${q16bis(phrase)}`;
        console.warn(phrase);

        $('#result').text(phrase);
    });
})