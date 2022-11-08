$(document).ready(function () {
    // init :
    (() => {
        // let pren = prompt('Quel est votre prénom ?');
        pren = 'Alexis';
        while (pren == null || !pren.trim()) { //} || pren.trim() == '') {
            pren = prompt('Ne te fous pas de ma gueule : un vrai prénom stp');
        }
        document.getElementsByTagName('h1')[0].textContent += ', ' + pren;
        document.getElementById('userNameSpan').textContent = pren;

    })()
});
