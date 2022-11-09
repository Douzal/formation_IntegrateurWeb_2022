$(document).ready(function () {
    console.warn('yo jQuery');

    // en js :
    let h1 = document.querySelector('h1');
    let attrSrc = h1.hasAttribute('src');
    let attrTitle = h1.hasAttribute('title');
    console.log(`h1 a un attribut src : ${attrSrc}`);
    console.log(`h1 a un attribut title : ${attrTitle}`);

    // en jQuery :
    console.log($('h1').attr('src'));
    console.log($('h1').attr('title'));

    // get all attr :
    h1attrlist = h1.attributes;
    console.log(`liste des attributs ${JSON.stringify(h1attrlist)}`);
    console.warn(h1attrlist);
    for (const att of h1attrlist) {
        console.log(att, att.value);
    }

    const img = document.querySelector('img');
    let imgclassName = img.className; // UNE STRING
    let imgClassList = img.classList; // liste des classes
    console.log(`Class name : ${imgclassName}\nClass list : ${imgClassList}`);
    console.warn(imgClassList[1]); // fonctionne
    console.warn(imgclassName[5]); // 6ième lettre de la string className, contenant toutes les classes séparées par un ' '

})