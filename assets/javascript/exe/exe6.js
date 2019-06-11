// NIVEAU 1

let input1Lvl1 = document.querySelector('#input1Lvl1'); // je selectionne le premier input
let input2Lvl1 = document.querySelector('#input2Lvl1'); // je selectionne le deuxième inut

let btnLvl1 = document.querySelector('#btnLvl1');   // je selectionne le btn

let repLvl1 = document.querySelector('#repLvl1'); // je selectionne le span ou il y aura la réponse

let nb1 = 0;
let nb2 = 0;
let rep = 0;

btnLvl1.addEventListener('click',()=>{
    nb1 = Number(input1Lvl1.value);
    nb2 = Number(input2Lvl1.value);
    rep = (nb1+nb2);
    repLvl1.innerText = rep;
})
// nb1 et nb2 prennent la valeur du premier et deuxième input
// rep prend l'addition des deux nb


// NIVEAU 2

let ecran = document.querySelector('#ecranExe6');
let boutonCal = document.querySelectorAll('.boutonCal');

let reponse = Number(0);

boutonCal.forEach(function(element) {
    element.addEventListener('click',()=>{
    ecran.value += element.value;
        if(element.classList.contains('equal')){
            let x = ecran.value;
            reponse = eval(x);
            ecran.value = reponse;
        }
        else if (element.classList.contains('correction')){
            ecran.value = '';
        }
    })
});
