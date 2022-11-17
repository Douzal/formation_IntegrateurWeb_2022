
let btn = document.querySelector('button');
let list = document.querySelector('ul');


// ... VERSION 1 ... // 

// btn.addEventListener('click', () => {

//     if (list.style.display === 'none') {
//         list.style.display = 'block';
//         btn.textContent = 'Mask List';
//     }
//     else {
//         list.style.display = 'none';
//         btn.textContent = 'Display List';
//     }
// })


// ... VERSION 2 ... // 

// btn.addEventListener('click', event => {

//     if (event.target.textContent === 'Mask List') {
//         event.target.textContent = 'Display List';
//         list.style.opacity = 0;
//         // list.classList.toggle('noOpacity');
//     }
//     else {
//         event.target.textContent = 'Mask List';
//         list.style.opacity = 1;
//         // list.classList.toggle('noOpacity');
//     }
// })


// ... VERSION 3 ... // 

btn.addEventListener('click', event => {

    list.classList.toggle('noOpacity');
    // list.toggleAttribute('hidden');
    // list.style.display = (list.style.display === 'none' ? 'block' : 'none');

    // ❌ NE MARCHE PAS : ❌ //
    // event.target.textContent = 'Display List' ? 'Mask List' : 'Display List'; 
    // ON NE PEUT PAS CONSULTER ET METTRE A JOUR LE CONTENU TEXTUEL EN MEME TEMPS
    // IL FAUT PASSER PAR UNE VARIABLE
    
    let textButton = event.target.textContent;
    event.target.textContent = (textButton === 'Display List' ? 'Mask List' : 'Display List');


})


// ... VERSION 4 : details | summary ... // 

// document.querySelector('details').addEventListener('click', () => {
//     if (document.querySelector('summary').textContent === 'Display List') {
//         document.querySelector('summary').textContent = 'Mask List';
//     }
//     else {
//         document.querySelector('summary').textContent = 'Display List';
//     }
// })