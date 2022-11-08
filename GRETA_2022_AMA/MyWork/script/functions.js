$(document).ready(function () {
    // hey(); // !err car définie après :  Cannot access 'hey' before initialization
    const hey = function () {
        console.log('fonction déclarée via const');
    }
    // hey(); // * ici ok.

    let a = 1; //+prompt('Nombre 1 svp');
    let b = 2; //+prompt('Nombre 2 svp');
    ((a, b) => {
        console.log(`a+b = ${a + b}`);
    })(a, b);

    function isLowerThan100(a, b) {
        return (a + b < 100 ? true : false);
    }

    // console.log(`res : ${isLowerThan100(a, b)}`);




});
