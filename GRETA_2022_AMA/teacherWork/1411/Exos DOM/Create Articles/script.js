
let images = ['arbre-jaune','arbre-neige', 'arbre-reflet','free-Iran', 'plusplus','red-tree', 'snow-house', 'sky', 'trees-sky', 'sea'];

document.getElementById('create-btn').addEventListener('click', (event) => {
    
    event.target.style.display = 'none';
    
    let artNumb = prompt('How many articles do you want ?');
    createArticle(artNumb);  

})


function createArticle(artNumb) {

    for (let i=0; i<artNumb; i++) {
        let article = document.createElement('article');
        article.classList.add('blogArticle');
        article.innerHTML = `
            <h2>Article Title N°${i+1}</h2>
            <img src="img/${images[i]}.jpg" alt="***">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>`;
        document.querySelector('section').append(article);  
    }
}

// création article - Version Longue //

/*
    let article = document.createElement('article');
    article.classList.add('blogArticle');
    
    let h2 = document.createElement('h2');
    h2.textContent = 'Article Title';

    let img = document.createElement('img');
    img.src = '';
    img.alt = '****';

    let para = document.createElement('p');
    para.textContent = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, minima!';

    article.append(h2, img, para);

    document.querySelector('section').append(article);  
*/ 
