
// l'objet event est disponible pour chaque événement
// selon l'événement, il possèdera des propriétés différentes

document.querySelector('button').addEventListener('click', event => {
    console.log(event);
    // --> PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}
})

document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();
    console.log(event);
    //  --> SubmitEvent {isTrusted: true, submitter: button, type: 'submit', target: form, currentTarget: form, …}
})

window.addEventListener('mousemove', event => {
    console.log(event);
    // -- MouseEvent {isTrusted: true, screenX: 401, screenY: 810, clientX: 321, clientY: 565, …}
} )