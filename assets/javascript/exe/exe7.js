let input1Exe7 = document.querySelector('#input1Exe7');
let divVide = document.querySelector('#divVide');

let btn1Exe7 = document.querySelector('#btn1Exe7');
let btn2Exe7 = document.querySelector('#btn2Exe7');
let btn3Exe7 = document.querySelector('#btn3Exe7');


btn1Exe7.addEventListener('click',()=>{
    btn1Exe7.classList.add('btn-primary');
    btn1Exe7.classList.remove('btn-outline-primary')
    btn2Exe7.classList.remove('btn-primary');
    btn2Exe7.classList.add('btn-outline-primary');
    btn3Exe7.classList.remove('btn-primary');
    btn3Exe7.classList.add('btn-outline-primary');
})

btn2Exe7.addEventListener('click',()=>{
    btn1Exe7.classList.remove('btn-primary');
    btn1Exe7.classList.add('btn-outline-primary');
    btn2Exe7.classList.add('btn-primary');
    btn2Exe7.classList.remove('btn-outline-primary');
    btn3Exe7.classList.remove('btn-primary');
    btn3Exe7.classList.add('btn-outline-primary');
})

btn3Exe7.addEventListener('click',()=>{
    btn1Exe7.classList.remove('btn-primary');
    btn1Exe7.classList.add('btn-outline-primary');
    btn2Exe7.classList.remove('btn-primary');
    btn2Exe7.classList.add('btn-outline-primary');
    btn3Exe7.classList.remove('btn-outline-primary');
    btn3Exe7.classList.add('btn-primary');
})

   

input1Exe7.addEventListener('keyup',(e)=>{ 
    if(input1Exe7.value != ''){ 
        if(e.key === 'Enter'){
            // ---- définition des variables
            let divContainer = document.createElement('div');
            divContainer.classList.add('container')
            divContainer.classList.add('borderCol')

            let divCol = document.createElement('div');
            divCol.classList.add('col-12');
            divCol.classList.add('toDo');
            
            let inputCheck = document.createElement('input');
            inputCheck.type ='checkbox';

            let label = document.createElement('label');
            label.style.width ='93%';
            label.classList.add('ml-3')
            label.innerText = input1Exe7.value



            let inputCol = document.createElement('input');
            inputCol.style.width ='93%'
            inputCol.classList.add('d-none');

            let button = document.createElement('button');
            button.innerText ='x'

            //------ ajout des enfants

            divVide.appendChild(divContainer);
            divContainer.appendChild(divCol);
            divCol.appendChild(inputCheck);
            divCol.appendChild(label);
            divCol.appendChild(inputCol);
            divCol.appendChild(button);
            
            



            
            //---- ajout de la couleur quand on check
            inputCheck.addEventListener('click',()=>{
                if(inputCheck.checked){
                    divContainer.classList.add('bg-success');
                    divContainer.classList.remove('bg-secondary');
                    
                    if(btn3Exe7.classList.contains('btn-primary')){
                        if(inputCheck.checked){
                            divContainer.classList.add('d-none')
                        }
                    }
                }
                else {
                    divContainer.classList.remove('bg-success');
                    divContainer.classList.add('bg-secondary');

                    if(btn2Exe7.classList.contains('btn-primary')){
                        if(inputCheck.checked){

                        }
                        else {
                            divContainer.classList.add('d-none');
                            
                        }
                    } 
                }
            })
            if(btn2Exe7.classList.contains('btn-primary')){
                divContainer.classList.add('d-none');
                    
                }





            //----- gestion des trois boutons
            btn1Exe7.addEventListener('click',()=>{
                divContainer.classList.remove('d-none')
            })
            btn2Exe7.addEventListener('click',()=>{
                if(divContainer.classList.contains('bg-success')){
                    divContainer.classList.remove('d-none');

                    


                }
                else{
                    divContainer.classList.add('d-none')
                }
            
            })
            btn3Exe7.addEventListener('click',()=>{
                if(divContainer.classList.contains('bg-success')){
                    divContainer.classList.add('d-none');
                }
                else{
                    divContainer.classList.remove('d-none')
                }
            })
            
            
            // ----- bouton pour supprimer tâche
            button.addEventListener('click',()=>{
                divVide.removeChild(divContainer)
            })


            // input sur label
            label.addEventListener('click',()=>{
                inputCol.classList.remove('d-none');
                inputCol.value = label.innerText 
                label.classList.add('d-none');
                inputCol.select()
            })
            inputCol.addEventListener('keyup',(e)=>{
                if(e.key === 'Enter') {
                    label.classList.remove('d-none');
                    inputCol.classList.add('d-none');
                    if(inputCol.value != ''){
                        label.innerText = inputCol.value 
                    }
                }
            })


            // je remet l'input à zéro
            input1Exe7.value = ''; 
        }
        
    }
})