window.addEventListener("scroll", checkOffSet);

const navbar = document.querySelector('#navbar')

function checkOffSet(e){
    if(window.pageYOffset > 0){
        navbar.style.backgroundColor = "white";
        navbar.style.padding = "1%";
    }
    else{
        navbar.style.backgroundColor = "transparent";
        navbar.style.padding = "1%";
    }
}