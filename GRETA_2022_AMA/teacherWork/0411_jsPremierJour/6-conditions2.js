

// let weather = '❄️';

// if (weather === '☀️') {
//     document.getElementById('weather').textContent = 'il fait beau ' + weather;
// }
// else if (weather === '🌥️') {
//     document.getElementById('weather').textContent = 'il y a des nuages ' + weather;
// }
// else if (weather === '⛈️') {
//     document.getElementById('weather').textContent = 'il y a de l\'orage ' + weather;
// }
// else if (weather === '❄️') {
//     document.getElementById('weather').textContent = 'il neige ' + weather;
// }
// else if (weather === '🌧️') {
//     document.getElementById('weather').textContent = 'il pleut ' + weather;
// }
// else {
//     document.getElementById('weather').textContent = 'je ne sais pas le temps qu\'il fait';
// }


let weather = '⛈️';
let msg;

switch (weather) {
    case '☀️': msg = 'il fait beau ';
    break;
    case '🌥️': msg = 'il y a des nuages ';
    break;
    case '⛈️': msg = 'il y a de l\'orage ';
    break;
    case '❄️': msg = 'il neige ';
    break;
    case '🌧️': msg = 'il pleut ';
    break;
    default: msg = 'je ne sais pas le temps qu\'il fait';
}


document.getElementById('weather').textContent = msg + weather;