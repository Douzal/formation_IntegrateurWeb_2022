
// le mot-clé return permet à la fonction de "produire" quelquechose qu'on pourra 
// il met fin à la finction (comme break et continue)

function multNumb(numb1, numb2){
    return numb1 * numb2;
    console.log(numb1 * numb2);  // instruction ignorée
}

// on stocke dans une variable le résultat de l'appel d'une fonction
let result = multNumb(5, 10);


function getUserName() {
    return prompt('What\'s your name ?');
}

let userName = getUserName(); 


// créer une fonction qui prend 2 nombre en paramètres
// la fonction renvoie true si la somme des deux est < 100
// la fonction renvoie false si la somme des deux est > 100

function isLowerThan100(numb1, numb2){

    // if ( numb1 + numb2 < 100 ) {
    //     return true;
    // }
    // else {
    //     return false;
    // }

    // return numb1 + numb2 < 100 ? true : false;

    // renvoie moi ce que tu penses de cette comparaison
    // javascript va naturellement dire si c'est true ou false
    return (numb1 + numb2) < 100 ;
}

    
