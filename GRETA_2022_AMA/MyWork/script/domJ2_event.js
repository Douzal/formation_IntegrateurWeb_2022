$(document).ready(() => {
    document.querySelectorAll('button')[0].addEventListener('click', (e) => {
        document.querySelector('span').style.visibility = 'visible';
        console.log(e.type);
        console.log(this); // arrow fonction -> hors contexte (this -> window)
        // SMASH 9 NOV PROF : https://fromsmash.com/S2Q6t_XJPN-ct
    });
})