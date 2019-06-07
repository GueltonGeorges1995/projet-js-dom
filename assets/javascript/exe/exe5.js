let btnOeuf = document.querySelector('#btnOeuf'); // je selectionne le bouton
let divOeuf = document.querySelector('#divOeuf'); // je selectionne la div vide ou il y aura les oeufs


btnOeuf.addEventListener('click',()=>{
    let img = document.createElement('img');
    img.setAttribute('src','./assets/img/oeuf1.png');
    img.setAttribute('width','50px');
    img.setAttribute('height','50px');
    img.classList.add('mr-1')
    document.querySelector('#divOeuf').appendChild(img);
})

// chaque fois que je clique sur le bouton je crée une image, je lui mets le chemin et sa taille en attribut, je lui rajoute un peu d'espace et je l'a met en enfant de ma div vide.