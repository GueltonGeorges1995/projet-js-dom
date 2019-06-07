let btnChangeExe4 = document.querySelector('#btnChangeExe4'); // je selectionne le btn changement
let btnNbExe4 = document.querySelector('#btnNbExe4'); // je selectionne le btn nb
let squareExe4 = document.querySelectorAll('.squareJs'); // je selectionne les carré
let spanExe4 =document.querySelector('#spanExe4'); // je selectionne le span dans le btn nb

let nbExe4 = 1; // je définis mon compteur à 1



btnChangeExe4.addEventListener('click',()=>{
    nbExe4 +=1 
    spanExe4.innerText = nbExe4-1
    if(nbExe4%2 === 0){
        squareExe4[0].classList.add('d-none');
        squareExe4[1].classList.remove('d-none');
    }
    else{
        squareExe4[0].classList.remove('d-none');
        squareExe4[1].classList.add('d-none');
    }
})

// chaque fois que je clique le compteur prend +1
// si le compteur est pair, le caré est d'un côté sinon il est de l'autre côté


