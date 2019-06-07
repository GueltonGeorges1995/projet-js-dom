let spanExe3 = document.querySelector('#spanExe3'); // je selectionne le span
let inputExe3 = document.querySelector('#inputExe3'); // je selectionne l'input
let btnExe3 = document.querySelector('#btnExe3'); // je selectionne le btn


btnExe3.addEventListener('click',()=>{
    spanExe3.innerText = inputExe3.value
    inputExe3.value = ''
   
})

// J'ajoute l'event click à mon btn, le span prend la value de l'input puis l'input prend comme value une chaine de cara vide.



