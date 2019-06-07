
let navSection = document.querySelector('#navBar'); // je vais chercher ma navbar
let btns = navSection.querySelectorAll('.navItem'); // je vais chercher tout les elements à l'intérieur de ma navbar
let exeItem = document.querySelectorAll('.exeItem');

// La boucle de l'enfer
for(let i = 0 ; i < btns.length ; i++){
    btns[i].addEventListener("click", function() {
        let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
        if(btns[i].classList.contains('active')){
            if(i === 0){
                exeItem[0].classList.remove('d-none');
                exeItem[1].classList.add('d-none');
                exeItem[2].classList.add('d-none');
                exeItem[3].classList.add('d-none');
                exeItem[4].classList.add('d-none');
                exeItem[5].classList.add('d-none');
            }
            else if (i === 1){
                exeItem[0].classList.add('d-none');
                exeItem[1].classList.remove('d-none');
                exeItem[2].classList.add('d-none');
                exeItem[3].classList.add('d-none');
                exeItem[4].classList.add('d-none');
                exeItem[5].classList.add('d-none');
            }
            else if (i === 2){
                exeItem[0].classList.add('d-none');
                exeItem[1].classList.add('d-none');
                exeItem[2].classList.remove('d-none');
                exeItem[3].classList.add('d-none');
                exeItem[4].classList.add('d-none');
                exeItem[5].classList.add('d-none');
            }
            else if (i === 3){
                exeItem[0].classList.add('d-none');
                exeItem[1].classList.add('d-none');
                exeItem[2].classList.add('d-none');
                exeItem[3].classList.remove('d-none');
                exeItem[4].classList.add('d-none');
                exeItem[5].classList.add('d-none');
            }
            else if (i === 4){
                exeItem[0].classList.add('d-none');
                exeItem[1].classList.add('d-none');
                exeItem[2].classList.add('d-none');
                exeItem[3].classList.add('d-none');
                exeItem[4].classList.remove('d-none');
                exeItem[5].classList.add('d-none');
            }
            else if (i === 5){
                exeItem[0].classList.add('d-none');
                exeItem[1].classList.add('d-none');
                exeItem[2].classList.add('d-none');
                exeItem[3].classList.add('d-none');
                exeItem[4].classList.add('d-none');
                exeItem[5].classList.remove('d-none');
            }
        }
        
    });
}

