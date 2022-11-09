$(document).ready(function () {
    // PART 3-syle-DOM
    let h1 = document.querySelector('h1');
    let computedStyle = getComputedStyle(h1);

    const parList = document.querySelectorAll('p');
    console.log(`Document contient ${parList.length} paragraphes`);

    // loop over elements to style
    let colorDarkGreed = 'color:#0b9329;';
    parList.forEach(p => p.style = colorDarkGreed);

    // spread operator : ...
    const arr1 = [1, 2, 3];
    const arr2 = [4, 5, 6];
    const arr3 = [...arr1, ...arr2];
    console.log(arr3); // [1, 2, 3, 4, 5, 6]
    console.log([arr1, arr2]); // [Array(3), Array(3)]: arr contenant les deux autres arr

})