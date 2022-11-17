

//  click  -  dblclick -  mousedown  -  mouseup

//  mousemove

// mouseenter - mouseleave  [ se déclenche pour l'élément EN ENTIER ]

// mouseover - mouseout  [ se déclenche pour l'élément OU  chacun de ses enfants ]

// document.querySelector('div').addEventListener('mouseleave', event => {
//     document.querySelector('div').classList.toggle('bgTeal');
// })


document.querySelector('div').addEventListener('mouseout', event => {
    document.querySelector('div').classList.toggle('bgTeal');
})

document.querySelector('div').addEventListener('mousemove', event => {
    console.log(event);
})