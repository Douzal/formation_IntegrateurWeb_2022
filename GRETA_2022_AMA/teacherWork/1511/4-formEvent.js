// submit - reset sur <form>
// event.preventDefault() pour empêcher que la page se recharge au submit
// ou que les données soient effacées au reset


document.querySelector('form').addEventListener('submit', (event) => {

    event.preventDefault();
    // console.log(userName.value, userMail.value, userPassword.value);
    
})


// 🚧 l'événement 'click' sur un bouton 'submit'  --> agit comme l'événement 'submit' 🚧 //

// document.getElementById('submit').addEventListener('click', (event) => {

//     event.preventDefault();
//     console.log(userName.value, userMail.value, userPassword.value);
    
// })



document.querySelector('form').addEventListener('reset', (event) => {

    document.querySelector('.resetConfirm').style.display = 'none';

})


// 🚧 l'événement 'click' sur un bouton 'reset'  --> agit comme l'événement 'reset' 🚧 //

document.getElementById('reset').addEventListener('click', (event) => {

    event.preventDefault();
    document.querySelector('.resetConfirm').style.display = 'block';

})

// 🚧 un bouton dans un formulaire est par défaut de type submit 🚧 //
document.querySelector('[type="button"]').onclick = () => {
    document.querySelector('.resetConfirm').style.display = 'none';
}



// pour capter les valeurs au moment de la saisie :
// input : se déclenche à chaque saisie ou choix ou changement de valeur
// change : se déclenche à un changement d'état / choix

document.getElementById('userName').addEventListener('input', (event) => {
    // console.log(event.target.value);
})


document.getElementById('userColor').addEventListener('change', (event) => {
    // console.log(event.target.value);
})



// ..... EXO VALIDATION FORMULAIRE ..... //

/*
 Si valeur saisie pour le nom n'est pas conforme (entre 3 et 10 lettres)
 un message en-dessous s'affiche 
 afficher des couleurs de bordures ou autre (red | green)
*/

let checkUserNamePara = document.getElementById('checkUserName');

function checkUserName(userName) {
    if (userName.length <3 || userName.length > 10) {
        checkUserNamePara.textContent = 'Invalid Format...';
        checkUserNamePara.style.color = 'red';
        // si beaucoup de déclarations CSS : 
        // checkUserNamePara.classList.add('invalid');
        // checkUserNamePara.classList.remove('valid');
    }
    else {
        checkUserNamePara.textContent = 'It\'s all good...';
        checkUserNamePara.style.color = 'green';
        // si beaucoup de déclarations CSS : 
        // checkUserNamePara.classList.add('valid');
        // checkUserNamePara.classList.remove('invalid');
    }
}

document.getElementById('userName').addEventListener('input', (event) => {
    checkUserName(event.target.value);
})
