

// demander une couleur via un prompt : applique la couleur aux paragraphes 2 / 4 / 6 etc;

let userColor = prompt('Give me a color');

let evenParas = document.querySelectorAll('p:nth-child(even)');

evenParas.forEach(item => {
    item.style.color = userColor;
})

