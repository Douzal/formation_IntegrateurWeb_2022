
//   scroll - wheel

// se déclenche avec l'activation de la molette de la souris
// indisponible sur mobile

window.addEventListener('wheel', event => {

    console.log(event);
})


// se déclenche dès que l'élément sur lequel on se place ait assez de hauteur pour pouvoir scroller


window.addEventListener('scroll', event => {

    // window.scrollY : éloignement depuis le haut de l'écran
    
    if (window.scrollY > 0) {
        document.querySelector('header').style.borderBottom = '2px solid grey';
    }
    else {
        document.querySelector('header').style.borderBottom = 'none';
    }


    if (window.scrollY > 200) {
        document.querySelector('.add').style.top = '50vh';
    }
    else {
        document.querySelector('.add').style.top = '-5rem';
    }

})