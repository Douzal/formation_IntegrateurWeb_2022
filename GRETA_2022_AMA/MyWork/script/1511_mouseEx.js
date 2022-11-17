$(() => {
    // function drawFunction(event) {
    //     let target = event.target;
    //     console.log(`Target coordinates : ${target}`);
    // }

    // drawFunction(e);

    const body = document.querySelector('body');
    document.addEventListener('mousemove', (e) => {
        // let target = e.target;
        let x = e.screenX, y = e.screenY;
        createDiv(x, y);

    });

    function createDiv(x, y, color = 'black') {
        let div = document.createElement('div');
        div.style.height = '1rem';
        div.style.width = '1rem';
        div.style.color = color;
        div.screenX = x;
        div.screenY = y;
        body.append(div);
    }

    let rappels = () => {
        // Primitives
        const number = 10;
        const bool = false;
        const str = 'Hello!';
        const missingObject = null;
        const nothing = undefined;

        // Objects
        const plainObject = {
            prop: 'Value'
        };
        const array = [1, 5, 6];
        const functionObject = (n1, n2) => {
            return n1 + n2;
        };
    }

    function passageValeurs() {
        let a = 1;
        let b = a;
        b = b + 2;
        console.log(a); // 1
        console.log(b); // 3
    }

    function passageReference() {
        let x = [1];
        let y = x;
        y.push(2);
        console.dir('dir y : ' + [y]);
        console.table('table y : ' + [y]);
        console.dir('dir x : ' + [x]);
        console.table('table x : ' + [x]);
        console.warn(`x===y ? : ${x === y}`);
    }

    passageReference();
})