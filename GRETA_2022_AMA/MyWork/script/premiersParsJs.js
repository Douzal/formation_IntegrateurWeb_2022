// $(function () {
$(document).ready(function () {
    console.info('yo jQuery');

    let name = 'Aldous';
    let phrase = `je m'appelle ${name}`;

    $("#ask").click(function (e) {
        let age = askName();
        // console.log(`Tu chiffres : ${age} de type : ${typeof (age)}`);
        // getResult(age)
        let result = getResult(age);
        console.warn('res : ' + JSON.stringify(result));
        let phrase = `age : ${result['age']}\nCas : ${result['cas']}`;
        // OU : let phrase = `age : ${result.age}\nCas : ${result.cas}`;
        $('#result').text(phrase);
    });

    function askName() {
        age = prompt('Quel âge avez-vous ?');
        age = +age;
        return age;
        // console.log(`age : ${age} de type : ${typeof (age)}`);
    }

    function getResult(age) {
        let cas; // = 0;
        switch (true) {
            case (age <= -20 || age >= 40):
                cas = 1;
                break;
            case (age >= -10 && age <= 0):
                cas = 2;
                break;
            case (age > 0 && age <= 15):
                cas = 3;
                break;
            case (age > 15 && age <= 25):
                cas = 4;
                break;
            case (age > 25):
                cas = 5;
                break;
        }
        // console.warn(` getResult : age : ${age} | cas : ${cas}`);
        return {
            age: age,
            cas: cas
        };
    }

    function trouveKiwi(arr, mot) {
        let existe = false;
        for (const item of arr) {
            if (item === mot) {
                existe = true;
                return arr.indexOf(item);
            }
        }
        return -1;
    }

    let fruts = ['pas kiwi', 'pas kiwi', 'pas kiwi', 'kiwi', 'pas kiwi'];
    let trouve = trouveKiwi(fruts, 'kiwi');
    if (trouve === -1) {
        console.log('Pas kiwi ici !')
    } else {
        console.log(`kiwi en ${trouve}ième position!`)
    };
})