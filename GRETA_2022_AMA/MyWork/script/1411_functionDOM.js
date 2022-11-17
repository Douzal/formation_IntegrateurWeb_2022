$(() => {
    // console.warn('yo jQuery 14 nov');
    const arrowFunction = () => {
        // do something
    }

    /* dans les callbakcs (une fonction passée en param d'une autre)
    on utilise souvent une fonction anonyme */
    // myArray.forEach(element => {
    //     console.dir(element);
    // });

    const thisBtn1 = document.querySelector('#btnThisContext1');
    const thisBtn2 = document.querySelector('#btnThisContext2');
    const thisBtn3 = document.querySelector('#btnThisContext3');
    thisBtn1.addEventListener('click', function () {
        console.log(this); // button
    });
    thisBtn2.addEventListener('click', () => {
        console.log(this); // window
    });
    // on peut tout de même utiliser arrow function and get the context with passing event as a parameter
    // and asking event.target
    thisBtn3.addEventListener('click', (e) => {
        console.log(e.target); // button
    });

})