
let navSection = document.querySelector('#navBar'); // je vais chercher ma navbar
let btns = navSection.querySelectorAll('.navItem'); // je vais chercher tout les elements à l'intérieur de ma navbar

for(let i = 0 ; i < btns.length ; i++){
    btns[i].addEventListener("click", function() {
        let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
        if(btns[i].classList.contains('active')){
            console.log(i)
        }
        
    });
}

