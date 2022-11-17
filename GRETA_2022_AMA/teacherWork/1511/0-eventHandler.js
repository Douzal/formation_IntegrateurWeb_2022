

// eventlistener : à l'écoute d'un événement quelqu'il soit
// on précise quel événement en 1er paramètre de la function

document.querySelector('div').addEventListener('click', () => console.log('click from addEventListener'));


// eventhandler : gère un événement en particulier
// la fonction porte le nom de l'événement (on + nom événement)

document.querySelector('div').onclick = () => console.log('click from eventhandler : onclick')


// différence entre les deux
// eventlistenner : on peut en attacher plusieurs sur le même élément
// eventhandler : on peut en attacher qu'un seul sur le même élément

const checkClick = () => console.log('click');
const checkClick2 = () => console.log('CLIIIICK');

// document.querySelector('h2').addEventListener('click', checkClick);
// document.querySelector('h2').addEventListener('click', checkClick2);

document.querySelector('h2').onclick = checkClick;
document.querySelector('h2').onclick = checkClick2;