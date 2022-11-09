

document.querySelector('h1').addEventListener('click', function(event) {
    console.log('h1 cliqué');

    // this fait référence au contexte : ici, l'élément cliqué
    console.log(this);  
    this.style.color = 'red';

    console.log(event); // --> événement écouté : ici, le click
    console.log(event.target); // --> cible de l'événement : ici, le h1
    console.log(event.target.textContent); // --> le texte du h1

})