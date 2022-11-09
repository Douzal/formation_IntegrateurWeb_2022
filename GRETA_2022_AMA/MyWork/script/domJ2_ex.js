$(document).ready(() => {

    function addStyle(col) {
        // 1- ask color
        // let col = window.prompt('Choisissez une couleur !');

        // 2- verify user entered something
        while (col == null || col.trim() == '') {
            col = window.prompt('Choisissez une couleur !');
        }

        //TODO 3- verify color exists

        // 4- apply color to p2 and p4
        let evenPar = window.document.querySelectorAll('p:nth-child(2n+1)');
        // evenPar = window.document.querySelectorAll('p:nth-of-type(2n+1)');
        // evenPar = [...evenPar];
        // let newStyle = 'color:' + col + ';';
        // console.log(`newStyle : ${newStyle}`);
        console.warn('evenPar : ', evenPar);
        evenPar.forEach(p =>
            // p.style += newStyle
            p.style.color = col
        );
    }

    $('#btn').click(function (e) {
        let col = window.prompt('Choisissez une couleur !');
        addStyle(col);
    });
})