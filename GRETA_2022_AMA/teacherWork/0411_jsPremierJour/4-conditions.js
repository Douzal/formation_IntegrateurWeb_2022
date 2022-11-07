
// ........ CONDITIONS if else .......... //

// let age = 14;

// if (age >= 18) {
//     console.log('vous pouvez entrer');
//     document.getElementById('myTitle').textContent = "vous pouvez entrer";
// }
// else {
//     console.log('désolé. il faut rester dehors');
// }


// console.log('suite du script');



// ........ avec une variable dynamique (prompt) .......... //


let userAge = prompt('Quel êge avez-vous ?');

if (userAge >= 18) {
    document.getElementById('myTitle').textContent = "vous pouvez entrer";
}
else {
    document.getElementById('myTitle').textContent = 'désolé. il faut rester dehors';
}


// ........ CONDITIONS if else if else.......... //



// let hour = new Date().getHours();
let hour = 2;

if (hour < 8) {
    document.getElementById('hour').textContent = 'il n\'est pas encore 8h';
}
else if (hour < 12) {
    document.getElementById('hour').textContent = 'il est entre 8h et 12h';
}
else if (hour < 18) {
    document.getElementById('hour').textContent = 'il est entre 12h et 18h';
}
else if (hour <= 24) {
    document.getElementById('hour').textContent = 'il est entre 18h et minuit';
}
else {
    document.getElementById('hour').textContent = 'veuillez rentrer un format horaire valide';
}


// ........ CONDITION TERNAIRE .......... //

// question ? instruction si true : instruction si false 

let age = 14;

if (age >= 18) {
    console.log('vous pouvez entrer');
    document.getElementById('myTitle').textContent = 'vous pouvez entrer';
}    
else {
    console.log('désolé. il faut rester dehors');
    document.getElementById('myTitle').textContent = 'désolé. il faut rester dehors';
}


age >= 18 ? console.log('vous pouvez entrer') : console.log('désolé. il faut rester dehors');

// console.log(age >= 18 ? 'vous pouvez entrer' : 'désolé. il faut rester dehors');

document.getElementById('myTitle').textContent = age >= 18 ? 'vous pouvez entrer' : 'désolé. il faut rester dehors'

