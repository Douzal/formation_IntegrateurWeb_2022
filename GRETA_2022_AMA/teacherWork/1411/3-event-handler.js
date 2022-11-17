
// une propriété par événement : onclick / onsubmit... 

// document.querySelector('button').onclick = function(event) {
//     console.log('click');
//     console.log(event.target);
// }

function checkClick() { console.log('click') };
function checkClick2() { console.log('I SAID CLIIICK') };

document.querySelector('button').onclick = checkClick;
document.querySelector('button').onclick = checkClick2; // écrase la déclaration précédente


// pour attacher plusieurs fonctionnalités au même élément et au même événement :
// il faut utiliser addEventListener()

document.querySelector('button:nth-child(2)').addEventListener('click', checkClick);
document.querySelector('button:nth-child(2)').addEventListener('click', checkClick2);

